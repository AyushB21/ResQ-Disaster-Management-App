import React from "react";
import { TouchableOpacity,SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";
import variables from "../constants/design";
import Footer from "../components/Footer";
const FooterLayout = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Middle Content */}
            <ScrollView style={styles.body}>
                {children}
            </ScrollView>

            {/* Bottom Component */}
            <View style={styles.footer}>
                {/* <Text>Mein Footer Hu</Text> */}
                <Footer/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Aligns top and bottom components at top and bottom, respectively
    },
    body: {
        flex: 1, // Takes up the available space between top and bottom components
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    footer: {
        backgroundColor: variables.primaryColor,
        padding: 20,
    },
});


export default FooterLayout;