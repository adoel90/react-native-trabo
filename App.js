import React from 'react';
import { Provider } from 'react-redux'


// import { createStore, applyMiddleware } from 'redux'
import { applyMiddleware } from 'redux'
import Reactotron from './ReactotronConfig'
// import Reactotron from 'reactotron-react-native'

import createSagaMiddleware from 'redux-saga'
const sagaMonitor = Reactotron.createSagaMonitor()


import TraboApp from './navigation/TraboApp'

import rootReducer from './reducers';
import logMiddleware from './middleware/log';
import userMiddleware from './middleware/user';
import loginMiddleware from './middleware/login';
// import bookCalenderAvailableMiddleware from '../middleware/booking_calender_available'
import bookingProductMiddleware from './middleware/booking_product'
import { rootSaga } from './middleware-saga/index';


import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

const sagaMiddleware = createSagaMiddleware({sagaMonitor});



// const store = createStore(rootReducer, applyMiddleware(
  // const store = Reactotron.createStore(rootReducer, compose(middleware))
  const store = Reactotron.createStore(rootReducer, applyMiddleware(
                                          // logMiddleware,
                                          sagaMiddleware,
                                          userMiddleware, 
                                          loginMiddleware, 
                                          // localStorageMiddleware,
                                          bookingProductMiddleware
                                          ));
                                          // bookCalenderAvailableMiddleware

sagaMiddleware.run(rootSaga);

if(__DEV__) {
  import('./ReactotronConfig.js').then(() => console.log('Reactotron Configured'))
}

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
  };


  componentDidMount(){
    Font.loadAsync({
      'openSansMedium': require('./assets/fonts/Roboto-Medium.ttf'), //https://docs.expo.io/versions/latest/guides/using-custom-fonts/
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
      
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* <AppNavigator /> */}
          <Provider store={store}>
            <TraboApp />
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry, Oke !
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
