import React from 'react';
import { Platform, Alert, TouchableHighlight} from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import {Text} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import AppStack from './AppStack';

export default createStackNavigator (

    //*RouteConfigs
    {
        HomeHeader:{
            screen: AppStack,
            navigationOptions: ({navigation}) => {
                // const { params = {} } = navigation.state
                return {

                    headerLeft: ({ focused }) => (
                        <TouchableHighlight
                            onPress={
                                () => {
                                    console.log('Wew !');
                                    navigation.dispatch(DrawerActions.toggleDrawer())
                                }
                            }
                        >
                            <TabBarIcon
                            focused={focused}
                            name={
                                Platform.OS === 'ios'
                                ? `ios-menu${focused ? '' : '-outline'}`
                                : 'md-menu'
                            }
                            
                            />
                        </TouchableHighlight>
                    ),
                    
                    headerStyle: {
                        shadowColor: 'transparent',
                        backgroundColor: '#4855b7',
                        borderBottomWidth: 0,
                        elevation: 0, // Fixed issue : https://github.com/react-navigation/react-navigation/issues/865
                        shadowOpacity: 0
                    }
                }
                
            },
          


        },
    },

    //* StackNavigatorConfig
    // { Waiting to explore here... }

   
  
  )



