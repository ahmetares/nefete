import {useState,useEffect} from 'react'
import { Text, Dimensions,TouchableOpacity,Image,View,StyleSheet } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'


function NFT101Card({nft101,onClick}) {

  
  
    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={styles.nft101Container}>
                <Image style={styles.image} source={{uri:`https://nefete.com.tr/${nft101.thumbnail}` }} />

                <View style={styles.textsContainer}>
                    <Text style={styles.title}> {nft101.title} </Text>
                    <Text style={styles.date}> {nft101.sub_title} </Text>
                </View>
            </View>


        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({

    container: {
        padding:15,
        flex:1,
        marginHorizontal:7,
        paddingHorizontal:8,
        width:Dimensions.get('window').width,
        marginBottom:25,
        borderColor:'grey',
     
    },

    nft101Container:{
        flexDirection:"column",
        
        
    },
    image: {
        width:(Dimensions.get('window').width/2)-30,
        height:(Dimensions.get('window').height/4.5),
        borderRadius:8,
        
    },
    textsContainer:{
        flexDirection:"column",
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        flex:1

    },


})

  export default NFT101Card