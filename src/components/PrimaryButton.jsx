import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import variables from '../constants/design';
import { Link } from 'react-router-native';

const PrimaryButton = ({ title, onPress, link }) => {
  return (
    <TouchableOpacity
        style={styles.primaryButton}
        onPress={onPress}
      >
      <Link to = {link}>
          <Text style={styles.buttonText}>{title}</Text>
      </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: variables.primaryColor,
    padding: 12,
    paddingHorizontal:24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default PrimaryButton;
