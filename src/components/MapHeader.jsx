import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Row from './Row';
import Dropdown from './DropDown';
import variables from '../constants/design';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap,faCompass } from '@fortawesome/free-solid-svg-icons';

const MapHeader = ({ selectedCategory, setCategory }) => {
  const [showHorizontalScrollView, setShowHorizontalScrollView] = useState(true);

  const toggleHorizontalScrollView = () => {
    setShowHorizontalScrollView(showHorizontalScrollView);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleCategoryChange = (category) => {
    console.log(category)
    setCategory(category);
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
        <Row>
            <TouchableOpacity
                style={styles.button}
                onPress={toggleHorizontalScrollView}
                >
                  <Row>
                    <FontAwesomeIcon icon = {faCompass} color={variables.white}/>
                    <Text style = {{color:variables.white, fontWeight:"600"}}>Past Incidents</Text>
                  </Row>
            </TouchableOpacity>
            {/* {!showHorizontalScrollView&&(
                // <Text>
                //     Hello
                // </Text>
                <Dropdown/>
            )} */}
            {showHorizontalScrollView && (
                <ScrollView horizontal style={styles.horizontalScrollView}>
                {/* List of horizontal items */}
                    <TouchableOpacity
                        style={styles.horizontalItem}
                        onPress={() => handleCategoryChange("Earthquake")}
                      >
                        <Text style={{ color: variables.black }}>Earthquake</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.horizontalItem}
                        onPress={() => handleCategoryChange("Wildfire")}
                      >
                        <Text style={{ color: variables.black }}>Wildfire</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.horizontalItem}
                        onPress={() => handleCategoryChange("Landslide")}
                      >
                        <Text style={{ color: variables.black }}>Landslide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.horizontalItem}
                        onPress={() => handleCategoryChange("Tsunami")}
                      >
                        <Text style={{ color: variables.black }}>Tsunami</Text>
                    </TouchableOpacity>
                {/* Add more items as needed */}
                </ScrollView>
            )}
        </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor:variables.primaryColor,
    color:variables.white,
    padding: 12,
    paddingHorizontal:24,
    alignSelf:"center",
    borderRadius:8,
  },
  horizontalScrollView: {
    width: '80%',
    maxHeight: 100,
    paddingVertical:12,
  },
  horizontalItem: {
    width: "auto", // Adjust the width of each horizontal item
    height: "auto", // Adjust the height of each horizontal item
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
    borderRadius:8,
    margin: 5,
  },
});

export default MapHeader;
