import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({}) =>{
    return (
        <View style={styles.header}>
            <Text>
                Ta da Ta da
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#ee0044",
        height:100,
        width:100,
        color:"#fafafa"
    }
})

export default Header;