import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';

import AboutText from '../assets/texts/AboutText';
import CustomLinearGradient from '../components/CustomLinearGradient';



function About({}) {

    return (
      <CustomLinearGradient style={{flex:1,marginBottom:20}} >
        <AboutText/>
      </CustomLinearGradient>
    );
  }


  export default About