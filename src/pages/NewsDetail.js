import {useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Image,Text, View, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native';
import { setCurrentDrawer,setBackIconVisible } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import RenderHtml from 'react-native-render-html';
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';

import formatDate from '../helper/dateFormatter';
import CustomLinearGradient from '../components/CustomLinearGradient';


function NewsDetail({route,navigation}) {


    const {title,details,thumbnail,created_at} = route.params.item

    const date = formatDate(created_at)
    const dispatch = useDispatch()


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

      const isFocused = useIsFocused();

      useEffect(() => {
        
       dispatch(setBackIconVisible(true))
       
      }, [])

    

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

      <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
      <Text style= {styles.date}>{date}</Text>
      </View>


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
      display:'flex',
      padding:7

    },

    date:{
      color:'grey',
      marginTop:8,
      padding:7,
     
    },

    detail:{
      marginBottom:'5%',
      marginHorizontal:7,
      fontSize: 23
    }
    
  })

  export default NewsDetail