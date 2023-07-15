import {useState,useEffect} from 'react'
import { Button, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer,useNavigation,useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDrawer,setToggleDrawer,setCurrentBottom } from '../store/generalSlice/generalSlice';
import { DrawerActions } from '@react-navigation/native'

import HomeScreen from '../pages/HomeScreen';
import Feed from '../pages/About';
import News from '../pages/News';
import TabBar from '../components/TabBar';




const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();




function SettingsScreen({navigation}) {

  
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting screen: Haberler ve market</Text>
    </View>
  );
}
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }



  function NFT101() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NFT101</Text>
      </View>
    );
  }

  function Market() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Market</Text>
      </View>
    );
  }

  function TabNavigator({navigation}) {

   const dispatch= useDispatch()
   const currentBottom = useSelector((state) => state.general.currentBottom)


    

    return (
    <Tab.Navigator screenOptions={{headerShown:false,}} >

    <Tab.Screen 
    name="Anasayfa" 
    component={HomeScreen}    
   />
    
    <Tab.Screen 
    name="Haberler"
    component={News} 
    />


    <Tab.Screen name="NFT 101" 
    component={NFT101} 
    />

     
    <Tab.Screen name="Market" 
    component={Market}
    />

  </Tab.Navigator>
  )
    }

    const HomeScreenStack = () => {
        return (
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomTabStack" component={TabNavigator} />
          </Stack.Navigator>
        );
      };

    function FeedStack() {
        return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="Tabbar" component={TabNavigator}  />

              <Stack.Screen name="Feed" component={Feed}  />
              </Stack.Navigator>
            )
    }

    function MyDrawer({}) {
   
    return (
      <Drawer.Navigator>

        <Drawer.Screen 
        name="TabStack" 
        component={HomeScreenStack} 
      
        />

      <Drawer.Screen 
        name="Article" 
        component={Article} 
        />

      <Drawer.Screen 
        name="FeedStack" 
        component={FeedStack} 
        />
    
      </Drawer.Navigator>
    );
  }
 



export default function Router({navigation}) {

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:true}}>

         <Stack.Screen 
         name="Nefffffete" 
         component={MyDrawer}
         options={{
          headerShown:false,
            headerLeft: () => {
              return(
                <Button title='Drawer' onPress={null} />)
            }}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}