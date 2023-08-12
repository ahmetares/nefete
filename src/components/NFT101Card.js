import {useState,useEffect} from 'react'
import { Text, Dimensions,TouchableOpacity,Image,View,StyleSheet } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import truncate from '../helper/textTruncate';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';


function NFT101Card({nft101,onClick}) {

   
    const subtitle = truncate(nft101.sub_title, 15)

    const [lang,setLang] = useState('')

    const findLanguage = () => {
      const lang = AsyncStorage.getItem('user-language').
      then((res) => 
      setLang(res))
     }
 
     useEffect(()=> {
       findLanguage()
     },[lang])
    


     if(lang==='en' && nft101.titleen===''){
        return null
     }

  
  
    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={styles.nft101Container}>
                <FastImage style={styles.image} source={{uri:`https://nefete.com.tr/${nft101.thumbnail}` }} />

                <View style={styles.textsContainer}>
                    <Text style={styles.title}> {lang === 'tr' ? nft101.title : nft101.titleen} </Text>
                    <Text style={styles.date}> {lang === 'tr' ? nft101.sub_title : nft101.sub_titleen } </Text>
                </View>
            </View>


        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({

    container: {
        padding:15,
        paddingHorizontal:8,
        width:Dimensions.get('window').width,
        borderColor:'grey',
     
    },

    nft101Container:{
        flexDirection:"column",
        
        
    },
    image: {
        width:(Dimensions.get('window').width)-16,
        height:(Dimensions.get('window').height/4),
        borderRadius:8,
        
    },
    textsContainer:{
        flexDirection:"column",
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,
        marginBottom:10,
        flex:1,
        color:'black'

    },


})

  export default NFT101Card