import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'


function SettingsScreen({navigation}) {

  
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting screen: </Text>
      </View>
    );
  }

  export default SettingsScreen