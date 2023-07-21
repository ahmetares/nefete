import { useState, useEffect } from 'react'
import { Text, View,FlatList,ScrollView, ActivityIndicator ,Button,StatusBar, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDrawer,toggleDrawerFalse,setToggleDrawer } from '../store/generalSlice/generalSlice';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Ionicon from 'react-native-vector-icons/Ionicons'
import CustomLinearGradient from '../components/CustomLinearGradient';
import axios from 'axios';

import DrawerModal from '../components/modals/DrawerModal';
import Header from '../components/Header';
import FirstNews from '../components/HomeFirstNews';
import NewsCard from '../components/NewsCard';
import HomeNFT101 from '../components/HomeNFT101';


function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const drawerStatus = useSelector((state) => state.general.toggleDrawer)

  const toggleModal = () => {
    dispatch(setToggleDrawer())
  };

  const handleModalClose = () => {
    dispatch(toggleDrawerFalse())
  };

  const openedModalTasks = () => {
    return(
      <>
      <BlurView  blurAmount={10}  blurType="light" style={{position:'absolute', left:0,right:0,top:0,bottom:0}}/>
      <StatusBar hidden />
      </>
    )
  }

  const [homeNews,setHomeNews] = useState([])
  const [homeNft101,setHomeNft101] = useState([])

  const [loading, setLoading]  = useState(true)

  const  fetchHomePageNews = async () => {
      const {data: newsList} = await axios.get(`http://localhost:5000/home-news`)  // android 10.0.2.2 ios localhost
      const {data: NFT101} = await axios.get(`http://localhost:5000/home-nft101`)

      setHomeNews(newsList)   
      setHomeNft101(NFT101)
      setLoading(false)
         
  }

  useEffect(()=>{
    fetchHomePageNews()
  },[])

  const navigateToNewsDetail = (item) => {
    navigation.navigate('NewsDetail', {item})
  }

  if(loading){
    return <ActivityIndicator/>
  }
  
  return (

    <CustomLinearGradient>

    <View style={{flex:1}}> 

  

    <Header title={'Güncel haberler'} description={'NFT ve metaverse dünyasından önemli haberler'} />

    <TouchableWithoutFeedback onPress={toggleModal} style={styles.iconContainer}>
      <View style={styles.iconPosition} >
      <View style={styles.iconWrapper}>
      <Ionicon  size={30} name='ios-menu-sharp'  color={'black'} style={styles.icon}/>
     </View>
     </View>
     </TouchableWithoutFeedback>

      <FlatList
      ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
      ListHeaderComponent={()=> <FirstNews news={homeNews[0]} navigation={navigation} />}
      ListFooterComponent={ <HomeNFT101 data={homeNft101} navigation={navigation} />}
      data={homeNews.slice(1)} 
      renderItem={({item}) => <NewsCard news={item} onClick={()=>navigateToNewsDetail(item)}/>} />

      {drawerStatus && openedModalTasks()}
        <DrawerModal
        visible={drawerStatus}
        onClose={handleModalClose}
        navigation={navigation}  />

      </View>

      </CustomLinearGradient>


  );
}

const styles=  StyleSheet.create({

  iconPosition:{
    position:'absolute',
    top:10,
    right:10
  },
  iconWrapper:{
    marginVertical:5,
    backgroundColor:'white',
    width:50,
    height:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50
  },
  seperator:{
    borderWidth:0.5,
    borderColor:'#a8a2a5',
    marginTop:20,
    marginBottom:20,
},
})

export default HomeScreen