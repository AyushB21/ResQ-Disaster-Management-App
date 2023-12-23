import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import Row from './Row';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from "react-router-native";

const ReportModal = ({ visible, onClose }) => {
  let history = useNavigate();
  
    function routeTeams() {
      history("/teams");
    }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Report</Text>
          <Text style={styles.msg}>Warning!! you are to about a Report a Calamity Choose your options wisely, and proceed accordingly.</Text>
          {/* Add your content here */}
          <Row>
            <PrimaryButton onPress={routeTeams} title = "Location"/>
            <PrimaryButton onPress={routeTeams} title={"Image"}/>
          </Row>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    width: 300,
    height: 240,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding:24,
    margin: 'auto', // Push to the center of the screen vertically
  },
  modalText: {
    marginVertical: 16,
    fontSize: 24,
  },
  msg:{
    marginBottom:24,
    textAlign:"center"
  }
});

export default ReportModal;
