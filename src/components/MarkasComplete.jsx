import React, { useState } from 'react';
import { View, Text, ScrollView,  StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import variables from '../constants/design';
const MarkasComplete = () => {
  // Sample data for the list of rows
  const data = [
    { id: 1, name: 'Doctor', number: '7', isChecked: false },
    { id: 2, name: 'Ambulance', number: '4', isChecked: true },
    // { id: 3, name: 'Bob', number: '789', isChecked: false },
    // Add more rows as needed
  ];

  const [rowData, setRowData] = useState(data);

  // Function to handle checkbox changes
  const handleCheckboxChange = (id) => {
    setRowData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, isChecked: !row.isChecked } : row
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Requests</Text>
      <ScrollView style={styles.scrollView}>
        {rowData.map((row) => (
          <View key={row.id} style={styles.row}>
            <View style={styles.column}>
              <Text>{row.name}</Text>
            </View>
            <View style={styles.column}>
              <Text>{row.number}</Text>
            </View>
            <View style={styles.column}>
              <CheckBox
                value={row.isChecked}
                onValueChange={() => handleCheckboxChange(row.id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: variables.gray,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MarkasComplete;
