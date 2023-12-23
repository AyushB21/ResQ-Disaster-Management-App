import DropDownPicker from 'react-native-dropdown-picker';
import React,  { useState } from 'react';
import { StyleSheet } from 'react-native';
function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Rescue Agency', value: 'apple'},
    {label: 'Camp', value: 'banana'}
  ]);

  return (
    <DropDownPicker
    style = {styles.picker}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        width:"100%",
        margin:0,
      }}
    />
  );
}

const styles = StyleSheet.create({
    picker:{
        width:"100%",
        margin:0,
        padding:0
    }
})

export default Dropdown