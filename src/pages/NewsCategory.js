import {useState,useEffect,useRef} from 'react'
import { Text, View,Button,FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';

import NewsCard from '../components/NewsCard';
import CustomLinearGradient from '../components/CustomLinearGradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';

function NewsCategory({navigation,categoryName}) {


    const [loading, setLoading]  = useState(true)
    const [news,setNews] = useState([])
    const [currentPage,setCurrentPage] = useState(1)


 



   
    

    const  renderCategory = async () => {

      const apiUrl =
      categoryName === 'all'
            ? `http://localhost:5000/news/${currentPage}`
            : `http://localhost:5000/category/${categoryName}-news/${currentPage}`;

        const response = await axios.get(apiUrl);
        const newData = response.data;
        setNews(prevNews => [...prevNews, ...newData]);
        setLoading(false);
    }


    useEffect(()=>{
      renderCategory()
    },[currentPage])
  

    const navigateToNewsDetail = (item) => {
      navigation.navigate('NewsDetail', {item})
    }

    const renderLoader = () => {
      return (
       loading ?  
       <View style={{marginVertical:16, alignItems:'center'}}>
       <ActivityIndicator/>
       </View> : null
      )
    }

    const loadMoreNews = () => {
      if(!loading){
        return(
          setCurrentPage(currentPage+1)
        )
      }
    }


  

    return (
      <CustomLinearGradient>
        <FlashList data={news} 
                  ItemSeparatorComponent={() => ( <View style={styles.seperator} />)} 
                   ListHeaderComponent={()=> <View style={{marginBottom:20}}></View>}
                   ListFooterComponent={renderLoader}
                   onEndReached={loadMoreNews}
                   estimatedItemSize={100}
                   onEndReachedThreshold={0.5}
                  renderItem={ ({item}) => <NewsCard news={item} onClick={()=>navigateToNewsDetail(item)}/>} />
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