import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Divider from './Divider';
import Dropdown from './DropDown';
import PrimaryButton from './PrimaryButton';
const { width, height } = Dimensions.get('window');
import Row from './Row';
import CheckBox from '@react-native-community/checkbox';

import { useNavigate } from "react-router-native";
const AlertModal = ({ isVisible, onClose }) => {
  let history = useNavigate();
  
    function routeRequestee() {
      history("/requesteeChat");
    }
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.overlay} />

        <View style={styles.contentContainer}>
          
          <Text style={styles.heading}>
            Alert
          </Text>
          <Divider/>
          <View style = {styles.container2}>
            <Text style={styles.text}>
              Resource Type
            </Text>
            <Dropdown/>
            <PrimaryButton title={"+ Add Type"}/>
          </View>
          <Divider/>
          <View style = {styles.container2}>
            <Text style={styles.text}>
              Resource Type
            </Text>
            <Dropdown/>
            <PrimaryButton title={"+ Add Resource"}/>
          </View>
          <Divider/>
          <Row>
            <Text style = {styles.flex1}>
              Current
            </Text>
            <PrimaryButton title={"Map"}/>
            <Text style = {styles.flex1}>
              Fill
            </Text>
          </Row>
          <Divider/>
          <Row>
            <CheckBox
                  value={true}
                />
              <Text>
                mark as urgent
              </Text>
          </Row>
          <PrimaryButton title = "Send" onPress={routeRequestee}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black with 70% opacity
    width: "100%", // 90% of screen width
    height: "100%", // 75% of screen height
    alignSelf: 'center',
  },
  contentContainer: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.75, // 75% of screen height
    backgroundColor: 'white',
    padding: 20,
    borderRadius:8,
    justifyContent:'space-between'
  },
  text:{
    fontSize:16,
    paddingVertical:4,
  },
  container2:{
    flexDirection:"column",
    gap:12,
  },
  heading:{
    fontSize:32,
    textAlign:"center"
  },
  flex1:{
    flex:1,
    textAlign:"center"
  }
});

export default AlertModal;
