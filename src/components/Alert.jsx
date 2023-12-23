import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons';

const Alert = ({onClick}) => {
  return (
    <View style={styles.buttonContainer}>
        {/* <FontAwesomeIcon icon = {faMap}/> */}
        <PrimaryButton title = "Alert" onPress={onClick}/>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 10, // Set your desired button background color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Set your desired text color
    fontWeight: 'bold',
  },
});

export default Alert;
