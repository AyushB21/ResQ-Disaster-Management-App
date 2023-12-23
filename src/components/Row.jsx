import React from "react";
import {View, Text, StyleSheet} from "react-native";
const Row =({children}) =>{
    return (
        <View style={styles.row}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap:10,
      alignItems: 'center',
    },
});

export default Row;