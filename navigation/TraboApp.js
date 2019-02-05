import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AppStack from './AppStack';
import AuthenticationStack from './AuthenticationStack';
import AuthenticationLoaderScreen from '../screens/AuthenticationLoaderScreen';


export default createAppContainer(createSwitchNavigator({
 
    // Main: MainTabNavigator
    App: AppStack,
    Authentication: AuthenticationStack,
    AuthLoader: AuthenticationLoaderScreen  
  },
  {
    initialRouteName: 'AuthLoader'
  }
));
