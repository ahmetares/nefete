import {useState,useEffect} from 'react'
import { Image, Text, View ,StyleSheet,SectionList,Dimensions,ScrollView,FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import CustomLinearGradient from '../components/CustomLinearGradient';
import { FlashList } from '@shopify/flash-list';
import MarketList from '../components/MarketCard';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';


function Market() {

  const {t} = useTranslation()



  const [topSales,setTopSales] = useState([])
  const [topCollections,settopCollections] = useState([])
  const [topMarkets,setTopMarkets] = useState([])





  const [loading,setLoading] = useState(true)


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': '6a21a438-066b-466e-95f7-2bd4cccd3bd0'
    }
  };

  const  fetchTopSales = async () => {
    const {data: nfts} = await axios.get('https://data-api.nftgo.io/eth/v1/market/rank/nft/24h?limit=50', options)  
    setTopSales(nfts)      
    setLoading(false)  
}


const fetchTopCollections = async () => {

  const {data: collections} = await axios.get('https://data-api.nftgo.io/eth/v1/market/rank/collection/24h?by=volume&with_rarity=false&asc=false&offset=0&limit=50', options)
  settopCollections(collections)      
  setLoading(false)  
}

const fetchTopMarkets = async () => {

  const {data: markets} = await axios.get('https://data-api.nftgo.io/eth/v1/market/rank/marketplaces/24h?sort_by=volume&asc=false&offset=0&limit=10&exclude_wash_trading=false', options)
  setTopMarkets(markets)      
  setLoading(false)  
}



  useEffect(()=> {
    fetchTopSales()
    fetchTopCollections()
    fetchTopMarkets()
  },[])






  if(loading){
    return <ActivityIndicator/>
  }

    return (

      
      <CustomLinearGradient>
      <Header header={'Market'} />
      <ScrollView>

        <Text style={[styles.header, {marginTop:'10%'}]}>{t('market-nft-header')}</Text>  
        <FlatList
        ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
        horizontal={true}
        scrollEnabled
        keyExtractor={(item,index) => index.toString()}
        data={topSales.nfts}
        renderItem={({item,index}) =>
            <MarketList 
            number={index+1}
            list={'nfts'}
            name={item.name} 
            collection={item.collection.name}
            value={item.max_price.value}
            priceChangeUsd = {Math.round(item.price_change_usd)}
            priceChangeEth = {item.price_change_eth}
            image={{uri: item.image}} 
            
            />}
            />





      <Text style={styles.header}>{t('market-collection-header')}</Text>  
        <FlatList
        horizontal={true}
        scrollEnabled
        ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
        keyExtractor={(item,index) => index.toString()}
        data={topCollections.collections}
        renderItem={({item,index}) =>
            <MarketList 
            list={'collections'}
            number={index+1}
            name={item.name} 
            collection={item.blockchain}
            categories={item.categories}
            volume_usd={Math.round(item.volume_usd)}
            volume_eth={Math.round(item.volume_eth)}
            floorETH={item.floor_price_eth}
            logo={{uri: item.logo}} />}
            />





      
      
      <Text style={styles.header}>{t('market-marketplace-header')}</Text>  
        <FlatList
        horizontal={true}
        scrollEnabled
        ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
        keyExtractor={(item,index) => index.toString()}
        data={topMarkets.marketplaces_info}
        renderItem={({item,index}) =>
            <MarketList 
            list={'market'}
            number={index+1}
            name={item.marketplace_name} 
            seller={item.sale_num}
            trader={item.trader_num}
            volume_usd={Math.round(item.volume_usd)}
            volume_eth={Math.round(item.volume_eth)}
            marketplace={item.marketplace_icon_url} />}
            />

      </ScrollView>
      </CustomLinearGradient>
    );
  }



  const styles = StyleSheet.create({
    header:{
        margin:5,
        marginTop:35,
        padding:7,
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    seperator:{
      borderWidth:0.9,
      marginBottom:10,
      borderColor:'#a8a2a5'
      
  }
  })


  export default Market
