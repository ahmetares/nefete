import {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'


function Header({title,description}) {

  
    return (
      <View style={styles.container}>
       <View style={styles.seperator} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.description}>{description} </Text>
        </View>
        <View style={styles.bottomseperator} />
      </View>
    );
  }

  export default Header


  const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    textContainer:{
        padding:8,
        margin:5
    },
    seperator:{
        marginTop:5,
        borderWidth:0.5,
        borderColor:'#a8a2a5'
    },
    title:{
        fontWeight:'bold',
        fontSize:23,
    },
    description:{
        fontSize:12,
        color:'grey'
    }
  })