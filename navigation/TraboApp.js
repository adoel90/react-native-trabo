import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AppStack from './AppStack'; // App Stack is called by HeaderStack
import DrawerStack from './DrawerStack';
import HeaderStack from './HeaderStack';
import AuthenticationStack from './AuthenticationStack';
import AuthenticationLoaderScreen from '../screens/AuthenticationLoaderScreen';

export default createAppContainer(createSwitchNavigator({
 
    AuthLoader: AuthenticationLoaderScreen,
    Authentication: AuthenticationStack,
    Header: HeaderStack,
    Drawer: DrawerStack
    // Main: MainTabNavigator
  },
  {
    initialRouteName: 'AuthLoader'
  }
));
