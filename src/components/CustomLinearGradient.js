import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = ({  children }) => {
  return (
      <LinearGradient colors={['#edf7f7','#b9e9eb', '#edc397']} style={styles.gradient}>
        {children}
      </LinearGradient>
  );
};

const styles = StyleSheet.create({

  gradient: {
    flex: 1,
  },
});

export default CustomLinearGradient;