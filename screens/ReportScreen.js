import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class ReportScreen extends React.Component {

  static navigationOptions = {
    title: 'Report'
    
  };

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Report</Text>
      </View>
    );
  }
}

