import {useState,useEffect} from 'react'
import { Text, View,StyleSheet,ActivityIndicator,FlatList } from 'react-native';
import axios from 'axios';


import CustomLinearGradient from '../components/CustomLinearGradient';
import Header from '../components/Header';
import NFT101Card from '../components/NFT101Card';

function NFT101({navigation}) {

  const [nft101News,setNft101News] = useState([])
  const [loading, setLoading]  = useState(true)

  const  fetchNFT101 = async () => {
      const {data: nft101} = await axios.get(`http://localhost:5000/nft101`)
      setNft101News(nft101)   
      setLoading(false)      
  }

  useEffect(()=>{
    fetchNFT101()
  },[])

  const navigateToNewsDetail = (item) => {
    navigation.navigate('NewsDetail', {item})
  }


  if(loading){
    return <ActivityIndicator/>
  }


    return (
      
      <CustomLinearGradient>
        <Header title={'NFT 101'} description={'Web3 dünyasının tüm detaylarını öğren'} />
        <FlatList data={nft101News} 
          keyExtractor={item => "_" + item.id}

                  ItemSeparatorComponent={() => (
                  <View style={styles.seperator} />)} 
                   ListHeaderComponent={()=> <View style={{marginBottom:20}}></View>}
                   renderItem={({item}) => <NFT101Card nft101={item} onClick={()=>navigateToNewsDetail(item)}/> } />
      </CustomLinearGradient>
    );
  }


  export default NFT101

  const styles= StyleSheet.create({
    seperator:{
      borderWidth:0.5,
      borderColor:'#a8a2a5',
      marginTop:20,
      marginBottom:20,
  },
  })