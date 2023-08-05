import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { useTranslation } from 'react-i18next';

import NFT101Card from './NFT101Card';
import Header from './Header';


function HomeNFT101({navigation,data}) {

  const {t} = useTranslation()

  //teke düşür

  const navigationToAllNews = () => {
    navigation.navigate('Haberler')
  }
  const navigationToNFT101 = () => {
    navigation.navigate('NFT 101')
  }

  const navigateToNewsDetail = (item) => {
    navigation.navigate('NewsDetail', {item})
  }
  
    return (
      <View>

        <TouchableOpacity onPress={navigationToAllNews}>
          <View style={styles.buttonWrapper}>
       
        <Text style={styles.buttonTitle}>{t('homepage-read-all-news')}</Text>
       
        <View style={styles.iconWrapper}>
        <AntIcon name='arrowright' size={19} />
        </View>
         
          </View>
        </TouchableOpacity>

        <Header header={'HomeNFT101'} color={{backgroundColor:'transparent'}} border={{borderWidth:0}}/>

        <FlatList 
        data={data} 
        keyExtractor={item => "_" + item.id}
        renderItem={({item}) => <NFT101Card nft101={item} onClick={() => navigateToNewsDetail(item)}/>} 
        />

    <TouchableOpacity onPress={navigationToNFT101}>
     
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonTitle}> {t('homepage-read-all-NFT101')}</Text>
         <View style={styles.iconWrapper}>
          <AntIcon name='arrowright' size={19} />
         </View> 
        </View>

        </TouchableOpacity>


      </View>
    );
  }

  const styles= StyleSheet.create({
    buttonWrapper:{
      marginVertical:15,
      display:'flex',
      justifyContent:'flex-end',
      flexDirection:'row',
      alignItems:'flex-end',
      borderLeftWidth:0,
      borderRightWidth:0,
      borderWidth:0.5,
      borderColor:'#a8a2a5',
      padding:10,


    },
    buttonTitle:{
      fontWeight:'bold',
      fontSize:15,
      marginRight:5
    },

 


  })

  export default HomeNFT101