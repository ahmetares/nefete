 
 import {useState,useEffect} from 'react'
 import { StyleSheet,Dimensions, Text, View } from 'react-native';
 import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
 import { useSelector, useDispatch } from 'react-redux'

 import { WebView } from 'react-native-webview';


 
 function Article() {
    return (
      <View style={styles.container}>
      <WebView
        source={{uri: 'https://nefete.com.tr/page/gizlililk-bildirisi'}}
        style={styles.video}
      />
    </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height:50
    
    },
    video: {
      maxHeight: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      flex: 1
    }
  }) 

  

  export default Article