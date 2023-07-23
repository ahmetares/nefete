import {useState,useEffect} from 'react'
import { Text, View,FlatList, TouchableOpacity } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import i18next, { languageResources } from '../services/i18next';
import LanguageList from "../services/languageList.json"
import AsyncStorage from '@react-native-async-storage/async-storage';


function Language({}) {

    const changleLng = (lng) => {
        i18next.changeLanguage(lng)
     //   storeData(lng)
    }

 /*   const getData = async () => {
        try {
        if(!await AsyncStorage.getItem('lng')) {
                await AsyncStorage.setItem('lng', 'en');
        }
          const jsonValue = await AsyncStorage.getItem('lng');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      };

      useEffect(()=> {
        const lang = getData()
        console.log(lang)
      },[])


    const storeData = async (value) => {
        try {
            if(!getData) {
                await AsyncStorage.setItem('lng', 'en');
            }
          await AsyncStorage.setItem('lng', value);
        } catch (e) {
          // saving error
        }
      };  */


  
  
    return (
      <FlatList data={Object.keys(languageResources) }
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => changleLng(item)}>
            <Text>{LanguageList[item].nativeName}</Text>
        </TouchableOpacity>
      )} />
    );
  }

  export default Language