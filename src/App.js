import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import userService from './services/userService';

export default function App() {
  const [name, setName] = useState('Gaby');
  const [user, setUser] = useState();

  handleLogout = () => {
    userService.logout();
    setUser(null);
  }

  handleSignupOrLogin = async () => {
    try {
      const user = await userService.getUser();
      setUser(user);
    } catch (e) {
      console.log(e)
    }
  }
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{name, setName}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


