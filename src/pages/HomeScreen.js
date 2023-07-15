import { useState, useEffect } from 'react'
import { Text, View,ScrollView, Button,StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDrawer,toggleDrawerFalse,setToggleDrawer } from '../store/generalSlice/generalSlice';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import DrawerModal from '../components/modals/DrawerModal';

import CustomLinearGradient from '../components/CustomLinearGradient';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const drawerStatus = useSelector((state) => state.general.toggleDrawer)

  const toggleModal = () => {
    dispatch(setToggleDrawer())
  };

  const handleModalClose = () => {
    dispatch(toggleDrawerFalse())
  };


  const openedModalTasks = () => {
    return(
      <>
      <BlurView  blurAmount={10}  blurType="light" style={{position:'absolute', left:0,right:0,top:0,bottom:0}}/>
      <StatusBar hidden />
      </>
    )
  }


  
  return (
    <CustomLinearGradient>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
            <Button onPress={toggleModal} title="Open Modal"> </Button>       
            <Button onPress={()=>navigation.navigate('Haberler')} title="Open New"> </Button> 

      <Text>Homeege!</Text>

        {drawerStatus && openedModalTasks()}
        <DrawerModal
        visible={drawerStatus}
        onClose={handleModalClose}
        navigation={navigation}  />
      </View>
      </CustomLinearGradient>

  );
}

export default HomeScreen