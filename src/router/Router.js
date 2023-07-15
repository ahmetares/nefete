import { View,Image,StyleSheet,TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector,useDispatch } from 'react-redux'

import HomeScreen from '../pages/HomeScreen';
import About from '../pages/About';
import News from '../pages/News';
import Article from '../pages/Article';
import SettingsScreen from '../pages/Setting';
import Market from '../pages/Market';
import NFT101 from '../pages/NFT101';
import Privacy from '../pages/Privacy';

import GoBackButton from '../components/GoBackButton';
import { setBackIconVisible } from '../store/generalSlice/generalSlice';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


  const HomeStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="Home" component={HomeScreen}  />
         <Stack.Screen name="About" component={About}  />
         <Stack.Screen name="Privacy" component={Privacy}  />
         <Stack.Screen name="Setting" component={SettingsScreen}  />
        </Stack.Navigator>
      )
  }

  function TabNavigator({navigation}) {

    const dispatch = useDispatch()

    return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{zIndex:1},}} >

    <Tab.Screen name="Anasayfa"  component={HomeStack} 
    listeners={{
      tabPress: () => {
        navigation.navigate('Home')
        dispatch(setBackIconVisible(false))
      },     
    }} />

    <Tab.Screen name="Haberler"component={News} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
      },     
    }} />
    <Tab.Screen name="NFT 101" component={NFT101} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
      },     
    }}  /> 
    <Tab.Screen name="Market" component={Market} listeners={{
      tabPress: () => {
        dispatch(setBackIconVisible(false))
      },     
    }} />

  </Tab.Navigator>
  )
}

export default function Router({}) {

  

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:true, }}>

         <Stack.Screen 
         name="Nefete" 
         component={TabNavigator}
         
         options={{
          headerBackground: () => {
             return(
              <View style={{display:'flex', marginTop:'8%',justifyContent:'space-evenly', alignItems:'center',}}>
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
    marginBottom:3,
    backgroundColor:'transparent',
    alignItems:'center',
    width:'30%',
    height:'100%',
    resizeMode:'contain',

},
})