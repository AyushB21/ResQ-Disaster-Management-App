import React,  { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Message from '../components/Message';
import HeaderLayout from '../layouts/HeaderLayout';
import FModal from '../components/FModal';
import MarkasComplete from '../components/MarkasComplete';
import variables from '../constants/design';

const RequesteeChat = () =>{
    return (
        <HeaderLayout showAlert={true}>
            <View style={styles.container}>
                <Message buttonTitle={"Mark as Complete"}>
                    <MarkasComplete/>
                </Message>
            </View>
        </HeaderLayout>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        position:"relative",
    }
})

export default RequesteeChat;