import { StyleSheet, View,Button, Text,Linking, TextInput,Image,Dimensions,TouchableOpacity, ScrollView } from "react-native";
import Modal from 'react-native-modal'
const deviceSize = Dimensions.get('window')
import React from 'react'
import { SlideInLeft, SlideInRight } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { setBackIconVisible,toggleDrawerFalse } from "../store/generalSlice/generalSlice";


{/*modaldaki on closelar modalın kapanması ile alakalı onbackbutton androide özel */}
const DrawerTopComponent  = ({navigation}) => {

    const dispatch = useDispatch()
    const navigate = (to) => {
        console.log(to)
        navigation.navigate(to)
        dispatch(toggleDrawerFalse())
        dispatch(setBackIconVisible(true))
    }

    

    return (


        <View style={styles.container } >

  

        <Image style={styles.logo} source = {{uri:'https://nefete.com.tr/img/logo.png'}}/>

            <View style={styles.wrapper}>

            <View style={[styles.options, {marginTop:20}]}>

                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> Linking.openURL('https://nefete.com.tr/')}>
                    <Text style={styles.optionText}>nefete.com</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />


                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> navigate('About')}>
                    <Text style={styles.optionText}>hakkımızda</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />


                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> {navigate('Privacy')}}>
                    <Text style={styles.optionText}>gizlilik politikası</Text>
                </TouchableOpacity>

                <View style={styles.seperator} />

                <TouchableOpacity style={styles.optionsWrapper} onPress={()=> {navigate('Privacy')}}>
                    <Text style={styles.optionText}>gizlilik politikası</Text>
                </TouchableOpacity>

                


             </View> 
            </View>
        </View>




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
        position:'absolute',
        top:5,
        left:5,
        width:40,
        height:25
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

export default DrawerTopComponent