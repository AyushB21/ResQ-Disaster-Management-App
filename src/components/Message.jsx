import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from './PrimaryButton';
import variables from '../constants/design';
import Row from './Row';

const messageData = {
    title:"Require 4 Ambulance",
    desc:"Immediate requirement of 4 Ambulance",
    isUrgent:true,
    by:"Team Racoons",
    location:"123.34"
}
const Message = ({children, buttonTitle, onAcceptPress}) =>{
    return (
        <View style = {styles.container}>
            <Row>
                <Image
                        source={require('../assets/Alert.png')}
                    />
                <Text style = {styles.title}>
                    {messageData.title}
                </Text>
            </Row>
            <Text style = {styles.desc}>
                {messageData.desc}
            </Text>
            <Text style = {styles.desc}>
                {messageData.isUrgent === true ? "Status : Urgent" : ""}
            </Text>
            <Text style = {styles.desc}>
                by {messageData.by}
            </Text>
            <Text style = {styles.desc}>
                Location {messageData.location}
            </Text>
            {children}
            <PrimaryButton title = {buttonTitle} onPress={onAcceptPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:variables.gray,
        padding:12,
        borderRadius:8,
        flexDirection:"column",
        gap:8,
    },
    title:{
        fontSize:24,
        fontWeight:"600",
        color:variables.black
    },
    desc:{
        fontSize:16,
    }
})

export default Message;