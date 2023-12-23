import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import variables from '../constants/design';
import PrimaryButton from './PrimaryButton';
import Dropdown from './DropDown';
import Row from './Row';
const FModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.overlay} onPress={onClose}>
          {/* Transparent Overlay */}
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          {/* Content Area */}
          <Text style={styles.head}>
            Fill in Details of your Assistance
          </Text>
          <Text style={styles.text}>
            Resource Type
          </Text>
          <Dropdown/>
          <Text style={styles.text}>
            Resource Number
          </Text>
          <Dropdown/>
          <PrimaryButton title={"+ Add Resource"}/>
          <TouchableOpacity onPress={onClose}>
            <PrimaryButton onPress={onClose} title={"Accept"}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
  },
  overlay: {
    // flex: 1.5, // Covers 2/3 of the screen
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black with 70% opacity
  },
  contentContainer: {
    // flex: 1, // Covers 1/3 of the screen
    backgroundColor: "white",
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    padding: 20,
    flexDirection:"column",
    height:"auto",
    gap:10
  },
  head:{
    fontSize:24,
    padding:12,
    textAlign:"center"
  },
  text:{
    fontSize:16
  }
});

export default FModal;
