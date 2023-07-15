import {useState,useEffect} from 'react'
import { Text, View,Button,FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import NewsCard from '../components/NewsCard';

function News() {

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
      console.log(news)
    },[news])

  
    useEffect(() => {
      if (isFocused) {
        // Sayfa odaklandığında çalışacak kodları buraya yazabilirsiniz
        // Örneğin, News ekranı odaklandığında bottom tab'ının rengini değiştirebilirsiniz.
        console.log('focuslandıkkııı')
        setFocus(true)

        
      
      }
    }, [isFocused, navigation])


    return (
      <View style={{}}>
        <Text>News</Text>
        <FlatList data={news} renderItem={({item}) => <NewsCard news={item}/> } />
      </View>
    );
  }

  export default News