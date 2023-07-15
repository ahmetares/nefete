import { StyleSheet, View,Button, Text,Linking, TextInput,Image,Dimensions,TouchableOpacity, ScrollView } from "react-native";
import Modal from 'react-native-modal'
const deviceSize = Dimensions.get('window')
import React from 'react'
import { SlideInLeft, SlideInRight } from "react-native-reanimated";
import {  setBackIconVisible, toggleDrawerFalse, toggleDrawerTrue } from "../../store/generalSlice/generalSlice";
import { useDispatch } from "react-redux";
import SocialMedia from "../SocialMedia";
{/*modaldaki on closelar modalın kapanması ile alakalı onbackbutton androide özel */}
const DrawerModal  = ({visible, onClose, onSend, navigation}) => {

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
                    <Text style={styles.optionText}>Hakkımızda</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />


                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> {navigate('Privacy')}}>
                    <Text style={styles.optionText}>Gizlilik Politikası</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />

                


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
    wrapper: {
        padding:20,
        width:deviceSize.width/1.55,

    },
    options: {
    },
    optionsWrapper:{
        width:'100%',

    },
    optionText:{
        fontSize:20,
        color:'grey',
        textAlign:'left',
        marginLeft:5

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