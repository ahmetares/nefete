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
