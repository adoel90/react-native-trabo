import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Text} from 'react-native';
// import Icon from '../components/Icon';
import TabBarIcon from '../components/TabBarIcon';

import AppStack from './AppStack';

export default createStackNavigator (
    
    //*RouteConfigs
    {
        HomeHeader:{
            screen: AppStack,
            navigationOptions: ({navigation}) => ({
                // headerLeft: <Icon name="home" size={15} color="#4855b7" />,
                headerLeft: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      name={
                        Platform.OS === 'ios'
                          ? `ios-menu${focused ? '' : '-outline'}`
                          : 'md-menu'
                      }
                    />
                ),
                // headerLeft: <Text>***</Text>,
                headerStyle: {
                    shadowColor: 'transparent',
                    backgroundColor: '#4855b7',
                    borderBottomWidth: 0,
                    elevation: 0, // Fixed issue : https://github.com/react-navigation/react-navigation/issues/865
                    shadowOpacity: 0
                }
                
            }),
          


        },
    },

    //* StackNavigatorConfig
    // { Waiting to explore here... }
  
  
  )