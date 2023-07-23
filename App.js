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
import Router2 from './src/router/Router2';

import { store } from './src/store/store.js';
import { Provider } from 'react-redux'
import "./src/services/i18next"
import SplashScreen from 'react-native-splash-screen';

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
