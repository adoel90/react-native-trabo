import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeDetailScreen from '../screens/HomeDetailScreen';

import BookingScreen from '../screens/BookingScreen';
import ManifestScreen from '../screens/ManifestScreen';
import ReportScreen from '../screens/ReportScreen';


//Booking Stack
const BookingStack = createStackNavigator(
    {
        Home: BookingScreen,
        Detail: HomeDetailScreen
    },
    {
        initialRouteName: "Home"
    }
);
  
BookingStack.navigationOptions = {
    tabBarLabel: 'Booking'
};

//Manifest Stack
const ManifestStack = createStackNavigator(
    {
        Manifest: ManifestScreen,
    }
);
  
ManifestStack.navigationOptions = {
    tabBarLabel: 'Manifest'
};


//Report Stack
const ReportStack = createStackNavigator(
    {
        Manifest: ReportScreen,
    }
);
  
ReportStack.navigationOptions = {
    tabBarLabel: 'Report'
};


// createTabNavigator || createBottomTabNavigator
export default createMaterialTopTabNavigator(
    {
        BookingStack,
        ManifestStack,
        ReportStack,
    }, 
    {
      tabBarOptions:  {
        style: {
          backgroundColor: '#4855b7'
        },
        indicatorStyle: {
          backgroundColor: 'white'
        }
      },
    //   initialLayout: {
    //     height: '10'  
    //   }
    }
  );


