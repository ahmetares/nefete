import {useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Image,Text, View, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import RenderHtml from 'react-native-render-html';

import CustomLinearGradient from '../components/CustomLinearGradient';
function NewsDetail({route}) {



    const {title,details,thumbnail} = route.params.item



  /*   API ye istek atmak yerine parametre vererek gönderince daha hızlı oldu. (resimler yine istek webe istek atıyor.)
     
      const [newsDetail,setNewsDetail] = useState([])
      const [loading,setLoading] = useState(false)
      const {id} = route.params

    const fetchNewsDetail = async () => {
        const {data: news} = await axios.get(`http://localhost:5000/news-detail/295`)
        setNewsDetail(news[0])
    }

    useEffect(()=>{
        fetchNewsDetail()
        setLoading(false)
      },[]) */

    

      const source = {
        html: details
      };
      

      const { width } = useWindowDimensions();


      const renderersProps = {
        img: {
          enableExperimentalPercentWidth: true,
        }
      };


      



  
    return (
        <CustomLinearGradient>
      <ScrollView style={{ flex: 1}}>

      <Text style= {styles.title}>{title}</Text>


        <View style={styles.imageContainer}>
         <Image style={styles.image} source={{uri:`https://nefete.com.tr/${thumbnail}`}} />
        </View>


        <View style={styles.detail}>
        <RenderHtml contentWidth={width} source={source || '' } 
        renderersProps={renderersProps} /> 
        </View>

      </ScrollView>
      </CustomLinearGradient>
    );

  }

  const styles= StyleSheet.create({

    imageContainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:15,
      margin:5
    },

    image: {
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height/3,
      resizeMode:'contain'
    },
    title:{
      fontWeight:'bold',
      fontSize:28,
      marginHorizontal:5,
      marginTop:'5%',
      display:'flex'

    },

    detail:{
      marginBottom:'5%',
      marginHorizontal:7,
      fontSize: 23
    }
    
  })

  export default NewsDetail