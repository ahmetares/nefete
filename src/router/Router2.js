import { View,Image,StyleSheet,Animated,TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer,useNavigation, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector,useDispatch } from 'react-redux'
import { useRoute,useIsFocused } from '@react-navigation/native';

import HomeScreen from '../pages/HomeScreen';
import About from '../pages/About';
import News from '../pages/News';
import SettingsScreen from '../pages/Setting';
import Market from '../pages/Market';
import NFT101 from '../pages/NFT101';
import Privacy from '../pages/Privacy';
import NewsDetail from '../pages/NewsDetail';
import NewsScreen from '../pages/NewsScreen';

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
         <Stack.Screen name="NewsDetail" component={NewsDetail}  />
        </Stack.Navigator>
      )
  }

  const Newstack = () => {

  
    return(
      <Stack.Navigator screenOptions={{headerShown:false}} >
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

  export default function Router({navigation}) {



    return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
                    headerBackground: () => {
                      return(
                      <View style={{display:'flex', marginTop:'8%',justifyContent:'space-evenly', alignItems:'center',}}>
                      <Image style={styles.logo} source = {{uri:'https://nefete.com.tr/img/logo.png'}}/>
                      </View>
                    )
                },
                    title:'',
                    headerTitleAlign:'center',
                    headerLeft: () => {
                      const backIconVisible = useSelector((state) => state.general.backIconVisible)
                      return(
                        <View>
                        {backIconVisible && <GoBackButton/> }
                        </View>
                      )
                    },  }} >


    <Tab.Screen name="Anasayfa"  component={HomeStack} 
    listeners={{
      tabPress: () => {
        const navigation = useNavigation(); // Use the useNavigation hook to access the navigation object

        navigation.navigate('Anasayfa')
        dispatch(setBackIconVisible(false))
      },     
    }} />

    <Tab.Screen name="Haberler"component={Newstack} listeners={{
      tabPress: () => {
      },     
    }} />
    <Tab.Screen name="NFT 101" component={NFT101Stack} listeners={{
      tabPress: () => {
      },     
    }}  /> 
    <Tab.Screen name="Market" component={MarketStack} listeners={{
      tabPress: () => {
      },     
    }} />

  </Tab.Navigator>
  </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  logo:{
    marginBottom:9,
    backgroundColor:'transparent',
    alignItems:'center',
    width:'30%',
    height:'100%',
    resizeMode:'contain',

},
})