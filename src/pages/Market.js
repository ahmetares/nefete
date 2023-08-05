import {useState,useEffect} from 'react'
import { Image, Text, View ,FlatList, ActivityIndicator} from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import CustomLinearGradient from '../components/CustomLinearGradient';
import FastImage from 'react-native-fast-image';
import { FlashList } from '@shopify/flash-list';


function Market() {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': '6a21a438-066b-466e-95f7-2bd4cccd3bd0'
    }
  };

  const  fetchMarket = async () => {
    const {data: market} = await axios.get('https://data-api.nftgo.io/eth/v1/market/rank/nft/24h?limit=50', options)  
    setData(market)      
    setLoading(false)  
}


  useEffect(()=> {
    fetchMarket()
  },[])

  useEffect(()=> {
    console.log(data)
  },[data])

  if(loading){
    return <ActivityIndicator/>
  }

    return (
      
      <CustomLinearGradient>
      <View>
        <Text>Market</Text>

        <FlatList    data={data.nfts}   renderItem={({item}) => 
          <View>
            <Text>{item.name}</Text>
            <Text>{item.collection.name}</Text>
            <Text>{item.max_price.value}</Text>
            <Text>{item.token_id}</Text>
            <FastImage style={{width:200, height:200,}} source={{uri: item.image}} />

          </View>
        } />
      
      </View>
      </CustomLinearGradient>
    );
  }


  export default Market
