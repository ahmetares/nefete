import { View,Text, StyleSheet, Image,TouchableOpacity, Dimensions } from "react-native";
import { memo,useState,useEffect } from "react";
import formatDate from "../helper/dateFormatter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FastImage from "react-native-fast-image";

function NewsCard({news,onClick}) {

    const date = formatDate(news.created_at)


    const [lang,setLang] = useState('')

    const findLanguage = () => {
      const lang = AsyncStorage.getItem('user-language').
      then((res) => 
      setLang(res))
     }
 
     useEffect(()=> {
       findLanguage()
     },[lang])

    
  

  

    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={styles.newsContainer}>
                <FastImage style={styles.image} source={{uri:`https://nefete.com.tr/${news.thumbnail}` }} />

                <View style={styles.textsContainer}>
                    <Text style={styles.title}> {lang === 'tr' ? news.title: news.titleen} </Text>

                    <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Text style={styles.date}> {date} </Text>
                    </View>

                </View>
            </View>


        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        marginHorizontal:7,
        paddingHorizontal:8,
        width:Dimensions.get('window').width,
     
    },

    newsContainer:{
        flexDirection:"row",
        
    },
    image: {
        width:100,
        height:100,
        borderRadius:10
    },
    textsContainer:{
        marginLeft:10,
        flexDirection:"column",
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        flex:1,
        color:'black'

    },
    date:{
        color:'grey'
    }


})

export default NewsCard