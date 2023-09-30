import {useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Image,Text, View, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native';
import { setCurrentDrawer,setBackIconVisible } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import RenderHtml from 'react-native-render-html';
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

import formatDate from '../helper/dateFormatter';
import CustomLinearGradient from '../components/CustomLinearGradient';


const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true,
  }
};


function NewsDetail({route,navigation}) {

  

    const [lang,setLang] = useState('')
    const {title,titleen,detailsen,details,thumbnail,created_at} = route.params.item

    const date = formatDate(created_at)
    const dispatch = useDispatch()

    //KÖTÜ çözüm geç geliyo vs bu kısımdan halletmemek daha iyi
    const findLanguage = () => {
     const lang = AsyncStorage.getItem('user-language').
     then((res) => 
     setLang(res))
    }

    useEffect(()=> {
      findLanguage()
    },[lang])

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


      useEffect(() => {       //sayfa açıldığında back iconunu getir 
       dispatch(setBackIconVisible(true))     
      }, [])

      navigation.addListener('beforeRemove', (e) => {  // swipe ile geri gelme için (ios) back iconunu kaldır
        dispatch(setBackIconVisible(false))
  })



      const renderingLang = lang =='tr' ? details:detailsen
      const source = {
        html: renderingLang
      };
      

      const { width } = useWindowDimensions();


     
    
 



    return (
        <CustomLinearGradient>
      <ScrollView style={{ flex: 1}}>

      <Text style= {styles.title}>{lang==='tr' ? title : titleen}</Text>

      <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
      <Text style= {styles.date}>{date}</Text>
      </View>


        <View style={styles.imageContainer}>
         <FastImage style={styles.image} source={{uri:`https://nefete.com.tr/${thumbnail}`}} />
        </View>


        <View style={styles.detail}>
        <RenderHtml contentWidth={width} tagsStyles={styles.tagsStyles} source={source || '' } 
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
      padding:7,
      color:'black'

    },

    date:{
      color:'grey',
      marginTop:8,
      padding:7,
     
    },

    tagsStyles:{
      p: {color:'black',fontSize:16},
      h3:{color:'black'},
      h2:{color:'black'},
      h1:{color:'black'},

    },

    detail:{
      marginBottom:'5%',
      marginHorizontal:7,
      fontSize: 23,
    }
    
  })

  export default NewsDetail