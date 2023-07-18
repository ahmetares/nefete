import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

import NewsCard from '../components/NewsCard';
import CustomLinearGradient from '../components/CustomLinearGradient';

function NewsCategory({navigate,categoryName}) {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch= useDispatch()

    const [loading, setLoading]  = useState(true)


    const [news,setNews] = useState([])

    const  renderCategory = async () => {

        if(categoryName === 'all') {
        const {data: newsList} = await axios.get(`http://localhost:5000/news/1`)
        setNews(newsList)   
        setLoading(false)
        }
        else{
          const {data: newsList} = await axios.get(`http://localhost:5000/category/${categoryName}-news/1`)
          setNews(newsList)  
          setLoading(false)
        }
  
        
    }


    useEffect(()=>{
      renderCategory()
    },[])
  

    const navigateToNewsDetail = (item) => {
      navigation.navigate('NewsDetail', {item})
    }


    if(loading){
      return <ActivityIndicator/>
    }

    return (
      <CustomLinearGradient>
        <FlatList data={news} 
                  ItemSeparatorComponent={() => (
                  <View style={styles.seperator} />)} 
                   ListHeaderComponent={()=> <View style={{marginBottom:20}}></View>}
                  renderItem={({item}) => <NewsCard news={item} onClick={()=>navigateToNewsDetail(item)}/> } />
      </CustomLinearGradient>
    );
  }

  export default NewsCategory

  
  const styles= StyleSheet.create({
    seperator:{
      borderWidth:0.5,
      borderColor:'#a8a2a5',
      marginTop:20,
      marginBottom:20,
  },
  })