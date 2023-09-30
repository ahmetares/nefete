import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';

import AboutText from '../assets/texts/AboutText';
import CustomLinearGradient from '../components/CustomLinearGradient';

import { useDispatch } from 'react-redux';
import { setBackIconVisible } from '../store/generalSlice/generalSlice';



function About({navigation}) {

  const dispatch = useDispatch()

  navigation.addListener('beforeRemove', (e) => {  // swipe ile geri gelme için (ios) back iconunu kaldır
    dispatch(setBackIconVisible(false))
})

    return (
      <CustomLinearGradient style={{flex:1,marginBottom:20}} >
        <AboutText/>
      </CustomLinearGradient>
    );
  }


  export default About