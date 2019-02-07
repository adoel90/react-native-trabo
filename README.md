# Use Node v10.14.2

# To run Cucumber BDD Test: 
* "npm run cucumber"

# Link Url Design :
* https://app.zeplin.io/project/5c57b6cc62086d35656a9770

# Url login Partner Trabo : 
* http://partner.trabo.co/login


#Alhamdulillah ada "Playround React Native"
* https://reactnavigation.org/
* https://github.com/react-navigation/react-navigation/tree/master/examples/NavigationPlayground

# Big big thanks website learing React Native
* http://www.reactnativeexpress.com/quick_start
* http://www.reactnativeexpress.com/lifecycle_api


# How do you debug react-native in Ubuntu 14.10 ?
* Run this command to open developer menu - adb shell input keyevent 82
* Select "Debug in chrome"
* A new tab in chrome will be opened.
* Right click, select Inspect Elements
* Select Console tab.
* Done


# Emulator untuk React Native - Menggunakan HP Fisik Sebagai Emulator
* https://www.petanikode.com/react-native-dasar/

#Debugging with "Reactotron"
* https://github.com/infinitered/reactotron
* https://www.smoothterminal.com/articles/using-reactotron

# Add Redux in React-Navigation
* http://himarsh.org/build-react-native-app-with-redux-and-react-navigation/
* https://reactnavigation.org/docs/en/redux-integration.html


# Add Drawer
* https://www.youtube.com/watch?v=213NhQ19_IE


# Add Icon 
* https://alligator.io/react/use-native-icons/
*      https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
* https://material.io/tools/icons/?style=baseline

# Good React Native Element !
* https://react-native-training.github.io

# Expo help you build React Native App
* https://docs.expo.io/versions/v32.0.0/


#

    {/* 
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Hai !!!
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
        </View>
        */} 

# Style Home Screen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
