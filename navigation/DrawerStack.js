
import { createDrawerNavigator } from 'react-navigation';

import MyDrawerHomeScreen from '../screens/MyDrawerHomeScreen';
import MyDrawerNotificationsScreen from '../screens/MyDrawerNotificationsScreen';

export default createDrawerNavigator({
    Home: {
        screen: MyDrawerHomeScreen,
    },
    NotificationDrawer: {
        screen: MyDrawerNotificationsScreen,
    },
});