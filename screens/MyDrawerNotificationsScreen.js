import React from 'react';
import { Button, Image, StyleSheet, View} from 'react-native';


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  
class MyDrawerNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./images/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
              onPress={() => this.props.navigation.navigate('NotificationDrawer')}
              onPress={() => this.props.navigation.toggleDrawer()}
              title="Go to notifications"
            />
        </View>
      );
    }
  }


export default MyDrawerNotificationsScreen;