import React from "react";
import { Touchable, Text, View, Image, StyleSheet } from "react-native";
import HeaderLayout from "../layouts/HeaderLayout";
import TeamName from "../components/TeamName";
import Row from "../components/Row";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faPhone, faStar, faMapPin, faTruck, faKitMedical,faPuzzlePiece,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import variables from "../constants/design";
import { useNavigate } from "react-router-native";


const Profile = () =>{
    let history = useNavigate();
  
    function routeUpdateResources() {
      history("/updateResources");
    }
    return(
        <HeaderLayout renderEdit={true} editText={"Edit"} editRoute={routeUpdateResources}>
            <View>
                {/* Background Image */}
                <Image style={{alignSelf:"center"}} source={require('../assets/IconProfile.png')}  />
                <Text style={styles.heading}>
                    National Disaster Management Agency
                </Text>
                <View style={styles.locationChipContainer}>
                    <View style = {styles.locationChip}>
                        <FontAwesomeIcon icon = {faMapPin} color={variables.white}/>
                        <Text style = {{color:"white"}}>
                            Assam, India
                        </Text>
                    </View>
                </View>
            </View>
            <View style = {{flexDirection:"column", gap:16, marginBottom:24}}>
                <View style={styles.chip}>
                    <Row>
                        <FontAwesomeIcon size={36} icon = {faPhone} color={variables.primaryColor}/>
                        <View style={styles.textContainer}>
                            <Text style={{color:variables.lgreen, fontWeight:"800", fontSize:16}}>
                                Mobile
                            </Text>
                            <Text style={{color:variables.black}}>
                                +91 7654896451
                            </Text>
                        </View>
                    </Row>
                </View>
                <View style={styles.chip}>
                    <Row>
                        <FontAwesomeIcon size={36} icon = {faStar} color={variables.primaryColor}/>
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
                        <FontAwesomeIcon size={36} icon = {faPuzzlePiece} color={variables.primaryColor}/>
                        <View style={styles.textContainer}>
                            <Text style={{color:variables.lgreen, fontWeight:"800", fontSize:16}}>
                                Resources
                            </Text>
                            <Row>
                                <FontAwesomeIcon size={20} icon = {faTruck} color={variables.primaryColor}/>
                                <Text>
                                    : 15
                                </Text>
                                <FontAwesomeIcon size={20} icon = {faKitMedical} color={variables.primaryColor}/>
                                <Text>
                                    : 7
                                </Text>
                                <FontAwesomeIcon size={20} icon = {faPeopleGroup} color={variables.primaryColor}/>
                                <Text>
                                    : 75
                                </Text>
                            </Row>
                        </View>
                    </Row>
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
        fontSize:28,
        textAlign:"center",
        color:variables.black,
        fontWeight:"700"
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
export default Profile;