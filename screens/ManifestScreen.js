import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class ManifestScreen extends React.Component {

  static navigationOptions = {
    title: 'Manifest'
    
  };

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Manifest</Text>
      </View>
    );
  }
}

