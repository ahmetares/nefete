import {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import i18next from "../services/i18next"

function Header({header,color,border}) {

  const {t} = useTranslation()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')


  const findHeader= () => {
    if(header == 'Anasayfa'){
       setTitle('homepage-header-title')
       setDesc('homepage-header-description')
   }
   if(header == 'Haberler'){
       setTitle('news-header-title')
       setDesc('news-header-description')
   }
   if(header == 'NFT101'){
    setTitle('nft101-header-title')
    setDesc('nft101-header-description')
   }
  }

  useEffect(()=> {
    findHeader()
  },[])


  
    return (
      <View style={[styles.container, {...color}]}>
       <View style={[styles.seperator, {...border}]} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>{t(title)} </Text>
        <Text style={styles.description}>{t(desc)} </Text>
        </View>
      </View>
    );
  }

  export default Header


  const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    textContainer:{
        padding:8,
        margin:5
    },
    seperator:{
        marginTop:5,
        borderWidth:0.5,
        borderColor:'#a8a2a5'
    },
    title:{
        fontWeight:'bold',
        fontSize:23,
        color:'black'
    },
    description:{
        fontSize:14,
        color:'grey'
    }
  })