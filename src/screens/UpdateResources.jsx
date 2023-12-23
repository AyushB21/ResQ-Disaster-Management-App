import React from "react";
import { Touchable, Text, View, Image, StyleSheet } from "react-native";
import HeaderLayout from "../layouts/HeaderLayout";
import TeamName from "../components/TeamName";
import Row from "../components/Row";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faPhone, faStar, faTruck, faPuzzlePiece, faKitMedical, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import variables from "../constants/design";
import Input from "../components/Input";
import { useNavigate } from "react-router-native";
import PrimaryButton from "../components/PrimaryButton";


const updateResources = () =>{let history = useNavigate();
  
    function routeProfile() {
      history("/profile");
    }
    return(
        <HeaderLayout renderEdit={true} editText={"Save"} editRoute={routeProfile}>
            <View>
                {/* Background Image */}
                <View style = {{flexDirection:"row",flex:1, alignItems:"center", justify:"center"}}>
                    <Image style={{alignSelf:"center", height:100, width:100}} source={require('../assets/IconProfile.png')}  />
                    <Text style={styles.heading}>
                        National Disaster {'\n'}Management Agency
                    </Text>
                </View>
            </View>
            <View style = {{flexDirection:"column", gap:16, marginBottom:24}}>
                <View style={styles.chip}>
                    <Row>
                        <FontAwesomeIcon size={36} icon = {faPhone}/>
                        <View style={styles.textContainer}>
                            <Text style={{color:variables.lgreen, fontWeight:"800", fontSize:16}}>
                                Mobile
                            </Text>
                            <Text style={{color:variables.black}}>
                                +91 9999988888
                            </Text>
                        </View>
                    </Row>
                </View>
                <View style={styles.chip}>
                    <Row>
                        <FontAwesomeIcon size={36} icon = {faStar}/>
                        <View style={styles.textContainer}>
                            <Text style={{color:variables.lgreen, fontWeight:"800", fontSize:16}}>
                                Speciality
                            </Text>
                            <Text style={{color:variables.black}}>
                                Oxygen Supply
                            </Text>
                        </View>
                    </Row>
                </View>
                <View style={styles.chip}>
                    <Row>
                        <FontAwesomeIcon size={36} icon = {faPuzzlePiece}/>
                        <View style={styles.textContainer}>
                            <Text style={{color:variables.lgreen, fontWeight:"800", fontSize:16}}>
                                Resources
                            </Text>
                            <Row>
                            <FontAwesomeIcon size={20} icon = {faTruck} color={variables.primaryColor}/>
                                <Text>
                                    : 0
                                </Text>
                                <FontAwesomeIcon size={20} icon = {faKitMedical} color={variables.primaryColor}/>
                                <Text>
                                    : 0
                                </Text>
                                <FontAwesomeIcon size={20} icon = {faPeopleGroup} color={variables.primaryColor}/>
                                <Text>
                                    : 0
                                </Text>
                            </Row>
                        </View>
                    </Row>
                    <View style={{marginVertical:16, flexDirection:"column",gap:16}}>
                        <Row>
                            <Input value = "Ambulance"></Input>
                            <Input placeholder={"value"}></Input>
                            {/* <Input value = "18"></Input> */}
                        </Row>
                        <Row>
                            <Input value = "Medical"></Input>
                            <Input placeholder={"value"}></Input>
                            {/* <Input value = "75"></Input> */}
                        </Row>
                        <Row>
                            <Input placeholder={"Type"}></Input>
                            <Input placeholder={"value"}></Input>
                        </Row>
                        <PrimaryButton title={"+ Add Resources"}/>
                        <PrimaryButton title={"Save"}/>
                    </View>
                </View>
            </View>
        </HeaderLayout>
    )
}

const styles = StyleSheet.create({
    chip:{
        padding:16,
        backgroundColor: variables.gray,
        borderRadius:8,
    },
    textContainer:{
        paddingLeft:8,
        borderLeftWidth:1,
        borderLeftColor:variables.primaryColor
    },
    heading:{
        fontSize:24,
        textAlign:"left",
        color:variables.black,
        fontWeight:"700",
        paddingBottom:12
    },
    locationChipContainer:{
        padding:12
    },
    locationChip:{
        backgroundColor:variables.primaryColor,
        padding:12,
        paddingHorizontal:24,
        width:"auto",
        alignSelf:"center",
        color:"white",
        borderRadius:50,
        flexDirection:"row",
        gap:12,
        alignItems:"center"
    }
    // title:{

    // },
    // text:{

    // }
})
export default updateResources;