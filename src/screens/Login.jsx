import React, {useState} from 'react';
import axios from "axios";
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import variables from '../constants/design';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import Row from '../components/Row';
import PrimaryButton from '../components/PrimaryButton';
const { width, height } = Dimensions.get('window');
import { useNavigate } from "react-router-native";

const Login = ({navigation}) => {
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');
  let history = useNavigate();
  
    function routeMap() {
      axios.post('https://pranavty.pythonanywhere.com/login', {
        security_code: securityCode,
        password: password,
      })
      .then(response => {
        // Handle the API response data here
        console.log(response.data);

        // You can navigate to the "map" screen or perform other actions based on the API response.
        history('/map');
      })
      .catch(error => {
        // Handle errors here
        console.error(error);
      });
      // history("/map");
    }
    function routeRegister() {
      history("/register");
    }
  return (
    <Modal
      transparent
      animationType="slide"
      visible= {true}
    >
      <View style={styles.container}>
        {/* Background Image */}
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />

        {/* Overlay */}
        <View style={styles.overlay}>
          {/* Icon Image */}

          <View style={styles.contentContainer}>
            <Image source={require('../assets/icon.png')} style={styles.iconImage} />
            <View style={styles.main}>
                <Text style={styles.heading}>NDMA</Text>
                <View style={styles.column}>
                  <Text style={styles.heading2}>
                    Join Rescue Operation
                  </Text>
                  <View style={styles.input}>
                    <Row>
                      <View style={styles.icon}>
                        <FontAwesomeIcon style={styles.icon} size={24} icon = {faUser}/>
                      </View>
                      <TextInput placeholder={"Security Code"}value={securityCode} onChangeText={text => setSecurityCode(text)}/>
                    </Row>
                  </View>
                  <View style={styles.input}>
                    <Row>
                      <View style={styles.icon}>
                        <FontAwesomeIcon style={styles.icon} size={24} icon = {faKey}/>
                      </View>
                      <TextInput placeholder={"Password"} secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}/>
                    </Row>
                  </View>
                  <Text onPress={routeRegister}> 
                    new User? Register
                  </Text>
                  <PrimaryButton onPress={routeMap} link = "/map" title = "Join"/>
                  <Text>
                    Recover password
                  </Text>
                </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Transparent black with 70% opacity
  },
  iconImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    position: 'absolute',
    top: -50, // Adjust position as needed
    left: 25, // Adjust position as needed
    zIndex:10,
  },
  contentContainer: {
    height:543,
    width:286,
    backgroundColor: "white", // Make content area transparent
    padding: 20,
    borderRadius:36,
  },
  main:{
    marginTop:32,
    padding:12,
  },
    heading:{
      fontSize:64,
      fontWeight:"600",
      color:variables.black
  },
  heading2:{
    fontSize:24,
    fontWeight:"500",
    // flex:1,
    textAlign:"center",
    padding:12,
    marginTop:24,
    color:variables.black
  },
  column:{
    flexDirection:"column",
    gap:16,
  },
  input:{
    backgroundColor:variables.gray,
    padding:2,
    borderRadius:8,

  },
  icon:{
    padding:8,
  }
});

export default Login;
