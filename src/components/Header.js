import {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'


function Header({title,description,color,border}) {

  
    return (
      <View style={[styles.container, {...color}]}>
       <View style={[styles.seperator, {...border}]} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.description}>{description} </Text>
        </View>
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