
import React from 'react';
import { Button, Image, StyleSheet, View} from 'react-native';

class MyDrawerHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./images/notif.jpeg')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {

      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  


  export default MyDrawerHomeScreen;