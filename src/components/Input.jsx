import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import variables from '../constants/design';

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: variables.white,
    backgroundColor:variables.white,
    width:"auto",
    borderRadius:8,
    padding: 10,
    borderRadius: 5,
    flex:1,
  },
});

export default Input;
