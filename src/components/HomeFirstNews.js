import { View,Text, StyleSheet, Image,TouchableOpacity, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect } from "react";
import FastImage from "react-native-fast-image";

function HomeFirstNews({news,navigation}) {

    const [lang,setLang] = useState('')

    const findLanguage = () => {
      const lang = AsyncStorage.getItem('user-language').
      then((res) => 
      setLang(res))
     }
 
     useEffect(()=> {
       findLanguage()
     },[lang])

    const navigateToNewsDetail = (item) => {
        navigation.navigate('NewsDetail', {item})
      }
  

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigateToNewsDetail(news)}>

            <View style={styles.newsContainer}>
                <View style={styles.imageContainer}>
                <FastImage style={styles.image} source={{uri:`https://nefete.com.tr/${news.thumbnail}`}}  />
                </View>

                <View style={styles.textsContainer}>
                    <Text style={styles.title}> {lang ==='tr' ? news.title : news.titleen} </Text>
                    <Text style={styles.subtitle}> {lang ==='tr' ? news.sub_title : news.sub_titleen} </Text>
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
        marginVertical:20,
        
        
    },

    newsContainer:{
        flexDirection:"column",
        
    },
    imageContainer:{
   //     backgroundColor:'green',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width/1.9,
        resizeMode:'contain',
    },
    textsContainer:{
        flexDirection:"column",
        flex:1,
},
    title:{
        fontWeight:'bold',
        fontSize:18,
        flex:1,
        marginVertical:7,
        color:'black'

    },
    subtitle:{
        color:'grey'
    }


})

export default HomeFirstNews