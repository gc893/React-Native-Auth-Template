import {useState, useEffect} from 'react';
import constate from 'constate';
import userService from '../services/userService'

function useUser() {
    const [user, setUser] = useState();
    
    useEffect(() => {
        handleSignupOrLogin();
    }, []);

    const handleSignupOrLogin = async () => {
        try {
          const user = await userService.getUser();
          setUser(user);
        } catch (e) {
          console.log(e)
        }
      };

      const handleLogOut = () => {
        userService.logout();
        setUser(null);
      }

    return {user, handleSignupOrLogin, handleLogOut};
}

export const [UserProvider, useUserContext] = constate(useUser);