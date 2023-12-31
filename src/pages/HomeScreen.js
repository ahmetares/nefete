import { useState, useEffect } from 'react'
import { Text, View,FlatList,ScrollView, ActivityIndicator ,Button,StatusBar, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDrawer,toggleDrawerFalse,setToggleDrawer } from '../store/generalSlice/generalSlice';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Ionicon from 'react-native-vector-icons/Ionicons'
import CustomLinearGradient from '../components/CustomLinearGradient';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import i18next from "../services/i18next"

import DrawerModal from '../components/modals/DrawerModal';
import Header from '../components/Header';
import FirstNews from '../components/HomeFirstNews';
import NewsCard from '../components/NewsCard';
import HomeNFT101 from '../components/HomeNFT101';


function HomeScreen({ navigation }) {


  const {t} = useTranslation()

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

  const [home,setHome] = useState([])
  const [loading, setLoading]  = useState(true)

  const  fetchHomePageNews = async () => {
      const {data: homeList} = await axios.get(`https://nefete-backend-prod-api.vercel.app/home`)
      setHome(homeList)
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

    <Header header={'Anasayfa'} />

      <TouchableWithoutFeedback onPress={toggleModal} style={styles.iconContainer}>
      <View style={styles.iconPosition} >
      <View style={styles.iconWrapper}>
      <Ionicon  size={30} name='ios-menu-sharp'  color={'black'} style={styles.icon}/>
      </View>
      </View>
      </TouchableWithoutFeedback>

      <FlatList
      ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
      ListHeaderComponent={()=> <FirstNews news={home[0]} navigation={navigation} />}
      ListFooterComponent={ <HomeNFT101 data={home.slice(6)} navigation={navigation} />}
      data={home.slice(1,6)} 
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
    width:30,
    height:30,
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