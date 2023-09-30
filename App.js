import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import Router from './src/router/Router';
import { store } from './src/store/store.js';
import { Provider } from 'react-redux'
import "./src/services/i18next"
import SplashScreen from 'react-native-splash-screen';

import { LogLevel, OneSignal } from 'react-native-onesignal';



const  App = () => {

/*  
  // Remove this method to stop OneSignal Debugging
//OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// OneSignal Initialization
OneSignal.initialize("0ca869e3-567c-4c62-bd56-7b6b0e465829");


// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);



// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});

*/

  useEffect(()=> {
    SplashScreen.hide()
  },[])


  return (
    <Provider store={store}>
    <Router/>
    </Provider>
  );
}


const styles = StyleSheet.create({

});

export default App;
