import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'


function NFT101() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NFT101</Text>
      </View>
    );
  }


  export default NFT101
