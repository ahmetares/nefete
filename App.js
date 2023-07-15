import 'react-native-gesture-handler';

import React from 'react';
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


const  App = () => {


  return (
    <Provider store={store}>
    <Router/>
    </Provider>
  );
}


const styles = StyleSheet.create({

});

export default App;
