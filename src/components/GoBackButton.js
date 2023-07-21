import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setBackIconVisible } from '../store/generalSlice/generalSlice';
import IonIcon from 'react-native-vector-icons/Ionicons'

const GoBackButton = ({}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const currentPage = useSelector((state) => state.general.currentPage)

    const goBackFunctionality = () => {
      navigation.navigate(currentPage)
      dispatch(setBackIconVisible(false))
  
      }

  return (
    <TouchableOpacity style={styles.container} onPress={goBackFunctionality}>
      <IonIcon name='chevron-back-outline' size={35} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
});

export default GoBackButton;