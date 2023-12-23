import React, {useState} from "react";
import { Touchable, Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Row from "../components/Row";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons';
import variables from "../constants/design";
import FooterLayout from "../layouts/FooterLayout";
import PrimaryButton from "../components/PrimaryButton";
import ReportModal from "../components/ReportModal";
import MapHeader from "../components/MapHeader";
import Dropdown from "../components/DropDown";
import DropDownPicker from "react-native-dropdown-picker";
import AlertReceived from "../components/AlertReceived";
import MapView, {Marker} from 'react-native-maps'
const MapAlert = () =>{
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const categories = {
        Earthquake: "green",
        Wildfire:"orange",
        Landslide:"yellow",
        Tsunami:"blue"
    }
    const mapPins = [
        {
          id: 1,
          latitude: 26.195,
          longitude: 91.825,
          category: 'Earthquake',
        },
        {
          id: 2,
          latitude: 26.215,
          longitude: 91.835,
          category: 'Earthquake',
        },
        {
          id: 4,
          latitude: 26.225,
          longitude: 91.855,
          category: 'Tsunami',
        },
        {
          id: 5,
          latitude: 26.195,
          longitude: 91.865,
          category: 'Landslide',
        },
        {
          id: 7,
          latitude: 26.205,
          longitude: 91.885,
          category: 'Wildfire',
        },
        {
          id: 8,
          latitude: 26.225,
          longitude: 91.895,
          category: 'Tsunami',
        },
        // Add more pins or categories as needed
      ];      
    const imageWidth = screenWidth; 
    const imageHeight = screenHeight-100
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return(
        <FooterLayout>
            <View style={styles.container}>
                <View style={{ width: imageWidth, height: imageHeight }}>
                    {/* <Image
                        source={require('../assets/Map.png')} // Replace with your image source
                        // resizeMode="center" // Ensures the image takes all available space
                        style={styles.image}
                    /> */}
                    <MapView
                      style={{ flex:1 }}
                      initialRegion={{
                        latitude: 26.2,
                        longitude: 91.8,
                        latitudeDelta: 0.2,
                        longitudeDelta:0.2,
                      }}
                      provider="google"
                      // customMapStyle={[]}
                      // showsUserLocation={true}
                      // showsMyLocationButton={true}
                      showsCompass={true}
                      showsScale={true}
                      // showsTraffic={true}
                      // showsBuildings={true}
                      // showsIndoors={true}
                      // showsPointsOfInterest={true}
                      apiKey={"AIzaSyACcVsH0VcJTBeBQklb07w56_xmc4I2XY8"} // Use your API key
                    >
                        {
                            mapPins.map((pin)=>(
                                <Marker
                                key={pin.id}
                                coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
                                pinColor={categories[pin.category]}
                                title={pin.category}
                                ></Marker>
                            ))
                        }
                        <Marker
                        coordinate={{ latitude: 26.20, longitude: 91.83 }}
                        title="Marker Title"
                        description="Marker Description"
                      />
                    </MapView>
                </View>
                <View style={[styles.mainBox, { top: 0, left:0}]}>
                    <AlertReceived/>
                </View>
                <View style={[styles.mainBox, { top: 60, left:0}]}>
                   <MapHeader selectedCategory={selectedCategory} setCategory={setSelectedCategory}/>
                   <Dropdown/>
                </View>
                <View style={[styles.box, { bottom: 20, left: "10%" }]}>
                    <PrimaryButton onPress={toggleModal} title = "Alert"/>
                </View>
            </View>
            <ReportModal visible={isModalVisible} onClose={toggleModal}/>
        </FooterLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', // Necessary for positioning fixed boxes
      },
      image: {
        // flex: 1,
        width: '100%',
        height: '100%',
      },
      box: {
        position: 'absolute',
        width:240,
        height:48,
        marginHorizontal:24,
      },
      mainBox: {
        position: 'absolute',
        width:"100%",
        height:"auto",
      },
})
export default MapAlert;