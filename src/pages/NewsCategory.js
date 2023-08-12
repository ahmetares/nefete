import {useState,useEffect,useRef,useCallback} from 'react'
import { Text, View,Button,FlatList, RefreshControl, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';

import NewsCard from '../components/NewsCard';
import CustomLinearGradient from '../components/CustomLinearGradient';
import { FlashList } from '@shopify/flash-list';

function NewsCategory({navigation,categoryName}) {


    const [loading, setLoading]  = useState(true)
    const [news,setNews] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    const [refreshing,setRefreshing] = useState(false)


 
    const  onRefresh = useCallback(() => {

      setCurrentPage(1)
      setRefreshing(true);

      setTimeout(() => {
        renderCategory().then(()=>{
          setRefreshing(false)
        })
      }, 1000);

    }, [currentPage]);


   
    const  renderCategory = async () => {

      const apiUrl = categoryName === 'all'
            ? `https://nefete-backend-prod-api.vercel.app/news/${currentPage}`
            : `https://nefete-backend-prod-api.vercel.app/category/${categoryName}-news/${currentPage}`;

        const response = await axios.get(apiUrl);
        const newData = response.data;

        if (currentPage === 1) {
          setNews(newData);
        } else {
          setNews(prevNews => [...prevNews, ...newData]);
        }        
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
        <FlashList refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
                  data={news} 
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