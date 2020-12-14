import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import userService from './services/userService';
import {UserProvider, useUserContext} from './hooks/useUserContext'

function App() {
  const { user } = useUserContext();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? 
          <>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </>
          :
          <>
            <Stack.Screen name="Log In" component={LogInScreen}/>
            <Stack.Screen name="Sign Up" component={SignUpScreen}/>
          </>
        }        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppProviders() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}


