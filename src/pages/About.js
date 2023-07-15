import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';
import AboutText from '../assets/texts/AboutText';




function About({}) {

    return (
      <View style={{flex:1,marginBottom:20}} >
        <AboutText/>
      </View>
    );
  }


  export default About