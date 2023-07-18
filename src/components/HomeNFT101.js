import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList,TouchableOpacity } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'

import NFT101Card from './NFT101Card';
import Header from './Header';

function HomeNFT101({navigation,data}) {

  
  
    return (
      <View>

        <TouchableOpacity>
        <Text>Tüm haberleri incele</Text>
        <Button onPress={()=>navigation.navigate('Haberler')} title="Tüm haberler"> </Button> 

        </TouchableOpacity>

        <FlatList 
        data={data} 
        key={'_'} 
        numColumns={2} 
        renderItem={({item}) => <NFT101Card nft101={item} onClick={null}/>} 
        ListFooterComponent={ <></>}
        />
      </View>
    );
  }

  export default HomeNFT101