import {useState,useEffect} from 'react'
import { Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import CustomLinearGradient from '../components/CustomLinearGradient';
function NewsDetail({route}) {

    const [newsDetail,setNewsDetail] = useState([])


    const {id} = route.params

    const fetchNewsDetail = async () => {
        const {data: news} = await axios.get(`http://localhost:5000/news-detail/${id}`)
        setNewsDetail(news[0])
    }

    useEffect(()=>{
        fetchNewsDetail()
      },[])

      useEffect(()=>{
        console.log(newsDetail);
      },[newsDetail])
  
    return (
        <CustomLinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NewsDetail screen: </Text>
        <Text>{newsDetail.title}</Text>
        <Text>NewsDetail sdasd: </Text>

      </View>
      </CustomLinearGradient>
    );
  }

  export default NewsDetail