import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import variables from '../constants/design';

const Divider = () => {
  return (
      <View style = {styles.divider}>
    </View>
  );
};

const styles = StyleSheet.create({
  divider:{
    height:2,
    backgroundColor:variables.gray,
    marginVertical:8,
  }
});

export default Divider;
