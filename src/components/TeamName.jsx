import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import variables from "../constants/design";
import Row from "./Row"
const TeamName = ({routeTo})=>{
    return (
        <TouchableOpacity onPress={routeTo}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Team Saviours
                </Text>
                <Row>
                    <View style = {styles.chip}>
                        <Text style = {{fontSize:20, color:variables.black}}>
                            7.9
                        </Text>
                        <Image
                            source={require('../assets/globe.png')}
                        />
                    </View>
                    <View style = {styles.chip}>
                        <Text style = {{fontSize:20, color:variables.black}}>
                            123
                        </Text>
                        <Image
                            source={require('../assets/Person.png')}
                        />
                    </View>
                    <View style = {styles.chip}>
                        <Text style = {{fontSize:20, color:variables.black}}>
                            90.0
                        </Text>
                        <Image
                            source={require('../assets/Radio.png')}
                        />
                    </View>
                </Row>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:variables.gray,
        borderRadius:4,
    },
    text:{
        fontSize:36,
        color:variables.black,
    },
    chip:{
        flexDirection:"row",
        padding:8,
        backgroundColor:variables.white,
        borderRadius:8,
        alignItems:"center",
        gap:4,
    }

})

export default TeamName;
