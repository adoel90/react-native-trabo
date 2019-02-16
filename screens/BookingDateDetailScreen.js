import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import moment from 'moment'

import { Toolbar } from 'react-native-material-ui';
import { log } from 'handlebars';

export default class BookingDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Booking Detail Screen'
    
  };

  constructor(){
    super(props);

    this.state = {
      titleDate: null
    }

  }

  componentDidUpdate(prevProps){
  
    const { navigation } = this.props;
    // const dateParams = navigation.getParam('data');
    // console.log(dateParams)

    // if(prevProps.navigation != navigation ){
    //   this.setState({
    //     ...this.state,
    //     titleDate: 
    //   })
    // }
  }

  render() {
    const { navigation } = this.props;
    const dateParams = navigation.getParam('data');
    let dateSelected = {
      year: dateParams._i.year,
      month: dateParams._i.month,
      day: dateParams._i.day
    }
    
    console.log(dateSelected.year.toString() + "-" + dateSelected.month.toString() + '-' + dateSelected.day.toString() );
  
    return (
      <View style={styles.container}>   

        {/* 
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
              menu: {
                  icon: "more-vert",
                  labels: ["item 1", "item 2"]
              }
          }}
          onRightElementPress={ (label) => { console.log(label) }}
        />

        */}
      </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 0,
  }
});