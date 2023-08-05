import { StyleSheet, View,Button, Text,Linking, TextInput,Image,Dimensions,TouchableOpacity, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import React from 'react'
import { SlideInLeft, SlideInRight } from "react-native-reanimated";
import {  setBackIconVisible, toggleDrawerFalse, toggleDrawerTrue } from "../../store/generalSlice/generalSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';


import SocialMedia from "../SocialMedia";
const deviceSize = Dimensions.get('window')


{/*modaldaki on closelar modalın kapanması ile alakalı onbackbutton androide özel */}
const DrawerModal  = ({visible, onClose, onSend, navigation}) => {

    const {t} = useTranslation()


    const dispatch = useDispatch()
    const navigate = (to) => {
        console.log(to)
        navigation.navigate(to)
        dispatch(toggleDrawerFalse())
        dispatch(setBackIconVisible(true))
    }

    

    return (

        <Modal 
        style={styles.modal}
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        swipeThreshold={100}
        percentageShown={100}
        swipeDirection="left"
        propagateSwipe

        > 
        <View style={styles.container } >

  

        <Image style={styles.logo} source = {{uri:'https://nefete.com.tr/img/logo.png'}}/>

            <View style={styles.wrapper}>

            <View style={[styles.options, {marginTop:20}]}>

                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> Linking.openURL('https://nefete.com.tr/')}>
                    <Text style={styles.optionText}>nefete.com</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />


                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> navigate('About')}>
                    <Text style={styles.optionText}>{t('drawer-about')}</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />


                <TouchableOpacity style={styles.optionsWrapperLanguage} onPress={()=> {navigate('Language')}}>
                    <Text style={styles.optionTextLanguage}>{t('drawer-language')} </Text>
                   { /* <Image style={styles.logo2} source = {require('../../assets/images/usa.svg.png')}/> */ }
                </TouchableOpacity>

                <View style={styles.seperator} />

                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> {navigate('Privacy')}}>
                    <Text style={styles.optionText}>{t('drawer-privacy')} </Text>
                </TouchableOpacity>

                


             </View> 

            </View>
            <View style={styles.socialMediaContainer} >
            <SocialMedia/>

            </View>

        </View>

        </Modal>



    )
}



const styles = StyleSheet.create({

   
    
    container: {
        backgroundColor:'white',
        padding:15,
        height: deviceSize.height,
        width:deviceSize.width/1.55,
        borderRadius:10,
        alignItems:'center',

    },
    logo:{
        marginTop:30,
        width:deviceSize.width/3,
        height:50,
        resizeMode:'contain'
    },
    logo2:{
        width:40,
        height:25,
        marginRight:10
    },
    wrapper: {
        padding:20,
        width:deviceSize.width/1.55,

    },
    optionsWrapper:{
        width:'100%',

    },
    optionsWrapperLanguage:{
        width:'100%',
        flexDirection:'row'
    },
    optionText:{
        fontSize:20,
        color:'grey',
        textAlign:'left',
        marginLeft:5

    },
    optionTextLanguage:{
        fontSize:20,
        color:'grey',
        textAlign:'left',
        marginLeft:5,
        flex:1
    },
    input_container:{
        flex:1,
        marginBottom:50,
    },  
    modal:{
        margin:0,
        borderRadius:10  
    },
    
    seperator:{
        borderWidth:0.5,
        borderColor:'#a8a2a5',
        width:'100%',
        marginBottom:15,
        marginTop:15
    
    },

    socialMediaContainer:{
        marginTop:15,

    }
    
})

export default DrawerModal