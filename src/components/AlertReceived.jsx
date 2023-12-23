import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { faMap, faBullhorn, faUser, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import variables from '../constants/design';  
import { useNavigate } from "react-router-native";

const AlertReceived = () => {
  let history = useNavigate();
  
  function routeChats() {
    history("/chats");
  }
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Delay for 5 seconds (5000 milliseconds)

    // Clean up the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isVisible && (
        <View style={styles.box}>
          <FontAwesomeIcon icon = {faExclamationCircle} size={36} color='red'/>
          <Text onPress={routeChats} style = {{fontSize:24, fontWeight:600, color:variables.black}}>ALERT RECEIVED</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "#FDEC04",
    opacity:1,
    padding: 16,
    borderRadius: 5,
    elevation: 3,
    flexDirection:"row",
    gap:16
  },
});

export default AlertReceived;
