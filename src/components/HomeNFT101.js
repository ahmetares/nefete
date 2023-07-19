import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import AntIcon from 'react-native-vector-icons/AntDesign'

import NFT101Card from './NFT101Card';
import Header from './Header';


function HomeNFT101({navigation,data}) {


  const navigationToAllNews = () => {
    navigation.navigate('Haberler')
  }
  const navigationToNFT101 = () => {
    navigation.navigate('NFT 101')
  }
  
    return (
      <View>

        <TouchableOpacity onPress={navigationToAllNews}>
          <View style={styles.buttonWrapper}>
       
        <Text style={styles.buttonTitle}>Tüm haberleri incele</Text>
       
        <View style={styles.iconWrapper}>
        <AntIcon name='arrowright' size={19} />
        </View>
         
          </View>
        </TouchableOpacity>

        <Header title={'NFT 101'} color={{backgroundColor:'transparent'}} border={{borderWidth:0}} description={'Web 3 dünyasındaki ayrıntıları kaçırma'}/>

        <FlatList 
        data={data} 
        key={'_'} 
        numColumns={2} 
        renderItem={({item}) => <NFT101Card nft101={item} onClick={null}/>} 
        ListFooterComponent={ <></>}
        />

    <TouchableOpacity onPress={navigationToNFT101}>
          <View style={styles.buttonWrapper}>
       
        <Text style={styles.buttonTitle}> Tüm NFT 101'leri incele</Text>
       
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