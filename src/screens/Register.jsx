import React, {useState, useEffect} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import variables from '../constants/design';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import Row from '../components/Row';
import PrimaryButton from '../components/PrimaryButton';
const { width, height } = Dimensions.get('window');
import { useNavigate } from "react-router-native";
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// Geolocation.getCurrentPosition(
//   (position) => {
//     const { latitude, longitude } = position.coords;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   },
//   (error) => {
//     console.warn(`Error getting location: ${error.message}`);
//   },
//   {
//     enableHighAccuracy: true,
//     timeout: 20000,
//     maximumAge: 1000,
//   }
// );

const Register = ({}) => {
  let history = useNavigate();
  const markerCoordinate = {
    latitude: 37.78825, // Replace with the same latitude as your initial region
    longitude: -122.4324, // Replace with the same longitude as your initial region
  };
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.warn(`Error getting location: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }, []);
  function routeUpdateResources() {
    history("/updateResources");
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
                    Register
                  </Text>
                  <View style={styles.input}>
                    <Row>
                      <View style={styles.icon}>
                        <FontAwesomeIcon style={styles.icon} size={24} icon = {faUser}/>
                      </View>
                      <TextInput placeholder={"Agency Name"}/>
                    </Row>
                  </View>
                  <View style={styles.input}>
                    <Row>
                      <View style={styles.icon}>
                        <FontAwesomeIcon style={styles.icon} size={24} icon = {faStar}/>
                      </View>
                      <TextInput placeholder={"Speciality"}/>
                    </Row>
                  </View>
                  <View style={styles.input}>
                    <Row>
                      <View style={styles.icon}>
                        <FontAwesomeIcon style={styles.icon} size={24} icon = {faPhone}/>
                      </View>
                      <TextInput style={{backgroundColor:variables.gray}} placeholder={"Mobile Number"}/>
                    </Row>
                  </View>
                  {/* <Image
                        source={require('../assets/smallMap.png')}
                        style={styles.image}
                    /> */}
                    <MapView
                      style={{ height:150 }}
                      initialRegion={{
                        latitude: userLocation?.latitude || 26.20,
                        longitude: userLocation?.longitude || 91.83,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                      }}
                      provider="google"
                      // customMapStyle={[]}
                      // showsUserLocation={true}
                      // showsMyLocationButton={true}
                      // showsCompass={true}
                      showsScale={true}
                      // showsTraffic={true}
                      // showsBuildings={true}
                      // showsIndoors={true}
                      // showsPointsOfInterest={true}
                      apiKey={"AIzaSyACcVsH0VcJTBeBQklb07w56_xmc4I2XY8"} // Use your API key
                    >
                      <Marker
                        coordinate={{ latitude: 26.20, longitude: 91.83 }}
                        title="Marker Title"
                        description="Marker Description"
                      />
                    </MapView>
                  <PrimaryButton onPress={routeUpdateResources} title = "Register"/>
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
    height:677,
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

export default Register;
