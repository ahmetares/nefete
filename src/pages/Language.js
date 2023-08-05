import {useState,useEffect} from 'react'
import { Text, View,FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import i18next, { languageResources } from '../services/i18next';
import LanguageList from "../services/languageList.json"
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntIcon from 'react-native-vector-icons/AntDesign'
import RNRestart from 'react-native-restart'; // Import package from node modules


function Language({navigation}) {

    const changleLng = (lng) => {
        i18next.changeLanguage(lng)
        RNRestart.restart();
    }


    const [lang,setLang] = useState('')
    const [langExtended,setLangExtended] = useState('')


    const findLanguage = () => {
      const lang = AsyncStorage.getItem('user-language').
      then((res) => setLang(res))
      
     }
 
     useEffect(()=> {
       findLanguage()
       if(lang=='tr') setLangExtended('Türkçe')
       else setLangExtended('English')
       console.log(lang)
     },[lang])

     console.log(lang)


  
  
    return (
      <FlatList data={Object.keys(languageResources) }
      ListHeaderComponent={()=> <View style={{marginTop:20}}></View>}
      ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 

      renderItem={({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => changleLng(item)}>
            <Text style={styles.text} >{LanguageList[item].nativeName}</Text>
            {langExtended==LanguageList[item].nativeName && <AntIcon name='check' size={20} />}
        </TouchableOpacity>
      )} />
    );
  }

  export default Language



  const styles= StyleSheet.create({

    container: {
      padding:20,
      backgroundColor:'white',
      flexDirection:'row'
    },

    text:{
      fontSize:15,
      flex:1
    },

    seperator:{
      borderWidth:0.3,
      borderColor:'#a8a2a5',
    
  },
  })