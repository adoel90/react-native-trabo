import React from 'react';
import { Platform } from 'react-native';
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

// import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ManifestScreen from '../screens/ManifestScreen';
import ReportScreen from '../screens/ReportScreen';
import LinkScreen from '../screens/LinksScreen';


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
export default createMaterialTopTabNavigator({
    BookingStack,
    ManifestStack,
    ReportStack,
  }, {
      tabBarOptions:  {
        style: {
          backgroundColor: '#4855b7'
        },
        indicatorStyle: {
          backgroundColor: 'white'
        }
      }
     
  });


