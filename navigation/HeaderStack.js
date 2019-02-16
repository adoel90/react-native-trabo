import React from 'react';
import { Platform, Alert, TouchableHighlight} from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import {Text, View, StyleSheet} from 'react-native';
import BookingDetailScreen from '../screens/BookingDateDetailScreen'

import { LinearGradient } from 'expo';

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
                    // header: props => <GradientHeader {...props} />,
                    // header: (props) => <GradientHeader {...props} />,
                    headerLeft: ({ focused }) => (
                        <TouchableHighlight
                            onPress={
                                () => {
                                    // console.log('Wew !');
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
                    },
                   
                }   
            }
        },
        InsideBooking: {
            screen: BookingDetailScreen
        }
    },

    //* StackNavigatorConfig
    // { Waiting to explore here... }
  )

const GradientHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
        <LinearGradient
            colors={['#7D6FE3', '#3121A9']}
            start={[1,1]}//Top & Left; 10% & 10%
            //end={[1,1]}//Bottom & Right; 10% & 10%
        >

        </LinearGradient>
    </View>
)

  {/* 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    https://docs.expo.io/versions/latest/sdk/linear-gradient/

    <LinearGradient
    colors={['#7D6FE3', '#3121A9']}
    start={[1,1]}//Top & Left; 10% & 10%
    //end={[1,1]}//Bottom & Right; 10% & 10%
    </LinearGradient>
    </View>
*/}




