import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

import NewsCard from '../components/NewsCard';
import CustomLinearGradient from '../components/CustomLinearGradient';

function News({navigate}) {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch= useDispatch()


    const [focus, setFocus] = useState(false)

    const [news,setNews] = useState([])


    const fetchNews = async () => {
      const {data: newsList} = await axios.get('http://localhost:5000/news/1')
      setNews(newsList)
  }
    useEffect(()=>{
      fetchNews()
    },[])
    useEffect(()=> {
     // console.log(news)
    },[news])

    const navigateToNewsDetail = (id) => {
      navigation.navigate('NewsDetail', {id})
    }

  
    useEffect(() => {
      if (isFocused) {
        // Sayfa odaklandığında çalışacak kodları buraya yazabilirsiniz
        // Örneğin, News ekranı odaklandığında bottom tab'ının rengini değiştirebilirsiniz.
        console.log('focuslandıkkııı')
        setFocus(true)

        
      
      }
    }, [isFocused, navigation])


    return (
      <CustomLinearGradient>
        <FlatList data={news} 
                  ItemSeparatorComponent={() => (
                  <View style={styles.seperator} />)} 
                   ListHeaderComponent={()=> <View style={{marginBottom:50}}></View>}
                  renderItem={({item}) => <NewsCard news={item} onClick={()=>navigateToNewsDetail(item.id)}/> } />
      </CustomLinearGradient>
    );
  }

  export default News

  
  const styles= StyleSheet.create({
    seperator:{
      borderWidth:0.5,
      borderColor:'#a8a2a5',
      marginTop:20,
      marginBottom:20,
  },
  })