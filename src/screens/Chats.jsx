import React,  { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Message from '../components/Message';
import HeaderLayout from '../layouts/HeaderLayout';
import FModal from '../components/FModal';

const Chats = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };


    return (
        <HeaderLayout showAlert={true}>
            <View>
                <Message buttonTitle={"Accept"} onAcceptPress={toggleModal}/>
                <FModal isVisible={isModalVisible} onClose={toggleModal} />
            </View>
        </HeaderLayout>
    )
}

export default Chats;