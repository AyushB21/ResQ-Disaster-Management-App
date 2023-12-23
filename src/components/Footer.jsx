import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons';
import variables from '../constants/design';
import { Link } from 'react-router-native';
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let history = useNavigate();

  function routeProfile() {
    history("/profile");
  }
  function routeMapAlert() {
    history("/mapAlert");
  }
  function routeTeams() {
    history("/teams");
  }
  const handleIconClick = (iconName) => {
    // Handle the click event for each icon here
    console.log(`Clicked on ${iconName} icon`);
  };

  return (
    <View style={styles.iconBar}>
      <TouchableOpacity
        style={styles.icon}
        onPress={routeTeams}
      >
        <FontAwesomeIcon icon={faBullhorn} size={32} color = {variables.white}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon}
        onPress={routeMapAlert}
      >
        <FontAwesomeIcon icon={faMap} size={32} color = {variables.white}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon}
        onPress={routeProfile}
      > 
        <FontAwesomeIcon icon={faUser} size={32} color = {variables.white}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 80,
    backgroundColor: variables.primaryColor,
    paddingHorizontal: 20,
  },
  icon: {
    alignItems: 'center',
  },
});

export default Footer;
