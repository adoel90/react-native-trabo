

/* Until i don't know, the codes is not used !*/

import React from 'react';
import { ActivityIndicator, StatusBar, Text } from 'react-native';

export default class Loader extends React.Component {
  render() {
    return (
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text></Text>
        <Text>Loading...</Text>
    );
  }
}