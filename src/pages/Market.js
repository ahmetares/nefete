import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'

import CustomLinearGradient from '../components/CustomLinearGradient';
function Market() {
    return (
      
      <CustomLinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Market</Text>
      </View>
      </CustomLinearGradient>
    );
  }


  export default Market