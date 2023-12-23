import React, {useState} from "react";
import { TouchableOpacity,SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";
import variables from "../constants/design";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import AlertModal from '../components/AlertModal';

import { useNavigate } from "react-router-native";



const HeaderLayout = ({children,renderEdit,editText, editRoute, showAlert}) => {
    let history = useNavigate();
  
    function routeUpdateResources() {
      history("/updateResources");
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Component */}
            <View style={styles.header}>
                <Text style={styles.headerText}>NDMA</Text>
                {renderEdit && (
                    <Text onPress={editRoute} style={styles.headerText}>{editText}</Text>
                )}
            </View>

            {/* Middle Content */}
            <ScrollView style={styles.body}>
                {children}
            </ScrollView>
            {showAlert&&(
                <Alert onClick={toggleModal}/>
            )}
            
            <AlertModal isVisible={isModalVisible} onClose={toggleModal}/>
            {/* Bottom Component */}
            <View style={styles.footer}>
                <Footer/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        position:"relative", // Aligns top and bottom components at top and bottom, respectively
    },
    header: {
        backgroundColor: variables.primaryColor,
        height:80,
        justifyContent:"center",
        padding:12,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    headerText:{
        fontSize: 24,
        fontWeight: '600',
        color:"#fafafa"
    },
    body: {
        flex: 1, // Takes up the available space between top and bottom components
        padding:12,
        position:"relative"
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    footer: {
        backgroundColor: variables.primaryColor,
        padding: 20,
    },
});


export default HeaderLayout;