import { View,Image,StyleSheet,Animated,TouchableOpacity, Dimensions, ImageBackground, Platform, StatusBar } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer,useNavigation, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector,useDispatch } from 'react-redux'
import { useRoute,useIsFocused } from '@react-navigation/native';
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"
import EntIcon from "react-native-vector-icons/Entypo"
import { useTranslation } from 'react-i18next';
//import analytics from '@react-native-firebase/analytics';
//import { useState,useRef } from 'react';



import HomeScreen from '../pages/HomeScreen';
import About from '../pages/About';
import Market from '../pages/Market';
import NFT101 from '../pages/NFT101';
import Privacy from '../pages/Privacy';
import NewsDetail from '../pages/NewsDetail';
import NewsScreen from '../pages/NewsScreen';
import Language from '../pages/Language';

import GoBackButton from '../components/GoBackButton';
import { setBackIconVisible, setCurrentPage } from '../store/generalSlice/generalSlice';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


  const HomeStack = () => {

    

    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="Home" component={HomeScreen}  />
         <Stack.Screen name="About" component={About}  />
         <Stack.Screen name="Privacy" component={Privacy}  />
         <Stack.Screen name="Language" component={Language}  />
         <Stack.Screen name="NewsDetail" component={NewsDetail}  />
      

        </Stack.Navigator>
      )
  }

  const Newstack = () => {
  
    return(
      <Stack.Navigator initialRouteName='News' screenOptions={{headerShown:false}} >
         <Stack.Screen name="News" component={NewsScreen}  />
         <Stack.Screen name="NewsDetail" component={NewsDetail}  />

        </Stack.Navigator>
      )
  }

  const NFT101Stack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="NFT101Stack" component={NFT101}  />
         <Stack.Screen name="NewsDetail" component={NewsDetail}  />

        </Stack.Navigator>
      )
  }

  const MarketStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="MarketStack" component={Market}  />

        </Stack.Navigator>
      )
  }

  function TabNavigator({navigation}) {

    const dispatch = useDispatch()
    const {t} = useTranslation()

  
    return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{zIndex:1},  }} >

    <Tab.Screen name="Anasayfa"  component={HomeStack} 
    listeners={{
      tabPress: () => {
        navigation.navigate('Home')
        dispatch(setBackIconVisible(false))
        dispatch(setCurrentPage('Home'))
      },     
    }}
    options={{
      tabBarLabel:t('tabbar-home'),
      tabBarIcon: ({focused}) => {
        return  <MCIcon name={'home'} size={20} color={focused ? 'black' : 'grey'} />  
      }
    }} />

    <Tab.Screen name="Haberler"component={Newstack} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
        dispatch(setCurrentPage('News'))
      },     
    }}
    options={{
      tabBarLabel:t('tabbar-news'),
      tabBarIcon: ({focused}) => {
        return  <MCIcon name='newspaper-variant-outline' size={20} color={focused ? 'black' : 'grey'} />
      }
    }} />


    <Tab.Screen name="NFT 101" component={NFT101Stack} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
        dispatch(setCurrentPage('NFT101Stack'))

      },     
    }}
    options={{
      tabBarIcon: ({focused}) => {
        return <MCIcon name='book' size={20} color={focused ? 'black' : 'grey'} />  
      }
    }}  /> 

    <Tab.Screen name="Market" component={MarketStack} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
        dispatch(setCurrentPage('MarketStack'))

      },     
    }} options={{
      tabBarIcon: ({focused}) => {
        
        return (
          <EntIcon name='bar-graph' size={20} color={focused ? 'black' : 'grey'} />
        )
      }
    }} />

  </Tab.Navigator>
  )
}

export default function Router({}) {

 // const routeNameRef =useRef();
 // const navigationRef =useRef();

  return (
    <NavigationContainer 
    
   /* ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }} */
    
    >
     <Stack.Navigator screenOptions={{headerShown:true, }}>

         <Stack.Screen 
         name="Nefete" 
         component={TabNavigator}
         
         options={{
          headerBackground: () => {
             return(
              <View style={[ Platform.OS === 'ios' && styles.headerStyle , { display:'flex',justifyContent:'space-evenly', alignItems:'center',}]}>
              <Image style={styles.logo} source = {{uri:'https://nefete.com.tr/img/logo.png'}}/>
              </View>
            )
        },
        headerTitleAlign:'center',
        title: '',
        
        headerLeft: () => {
         const backIconVisible = useSelector((state) => state.general.backIconVisible)
          return(
            <View>
           {backIconVisible && <GoBackButton/> }
           </View>
          )
        }
        }}
        
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    marginBottom:9,
    backgroundColor:'transparent',
    alignItems:'center',
    width:'25%',
    height:'100%',
    resizeMode:'contain',
    marginTop:'8.5%'

},

headerStyle: {
  backgroundColor:'white'
}
})