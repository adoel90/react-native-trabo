import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListUser } from '../actions/user';

import { MonoText } from '../components/StyledText';


class BookingScreen extends React.Component {

  static navigationOptions = {
    // header: null,
    title: 'Booking',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
        title= "Log out"
      />
    ),
  };

  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { action } = this.props;
    action.getListUser();
    // console.log(this.props);
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Authentication');
  };


  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Booking</Text>
        <Text>Date Picker Component</Text>
        <Text>Recent Order</Text>
        <Text>List Customer</Text>
        <Text>Customer Detail</Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail',{
              itemId: 86,
              otherParam: 'Anything...'
          })}
        />
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
        
      

        
    );
  }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const mapStateToProps = (state) => ({
  login: state,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getListUser}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);
// export default BookingScreen