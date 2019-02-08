import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import LoadingScreen from'../screens/LoadingScreen';
import { createAppContainer, createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
const AuthStack=createStackNavigator({SignIn:AuthScreen});
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Loading:LoadingScreen,
  
  App: MainTabNavigator,
  Auth:AuthStack,
}));