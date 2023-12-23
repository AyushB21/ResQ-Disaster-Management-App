import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from '@fortawesome/react-native-fontawesome';
import { faMap, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons';

const InputwIcon = ({ icon}) => {
  return (
    <View style={styles.container}>
      {/* <Icon name={faMap} style={styles.icon} /> */}
      {/* import all the icons and take the input of iconName */}
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: '#333', // You can customize the icon color
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 5,
  },
});

export default InputwIcon;
