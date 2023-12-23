import { PermissionsAndroid, Platform } from 'react-native';

async function requestLocationPermission() {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted.');
      } else {
        console.log('Location permission denied.');
      }
    }
    // For iOS, you can use the requestPermissions method.
  } catch (err) {
    console.warn(err);
  }
}

import React from 'react';
import Teams from './src/screens/Teams';
import Chats from './src/screens/Chats';
import Login from './src/screens/Login';
import UpdateResources from './src/screens/UpdateResources';
import Register from './src/screens/Register';
import Map from './src/screens/Map';
import MapAlert from './src/screens/MapAlert';
import RequesteeChat from './src/screens/RequesteeChat';
import Profile from './src/screens/Profile';
import { NativeRouter, Route, Routes, Switch } from 'react-router-native';
import BackHandlerManager from './BackHandlerManager';
const App = () => {
  requestLocationPermission();
  return (
    <NativeRouter>
      <BackHandlerManager/>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/chats" Component={Chats} />
        <Route path="/map" Component={Map} />
        <Route path="/mapAlert" Component={MapAlert} />
        <Route path="/profile" Component={Profile} />
        <Route path="/requesteeChat" Component={RequesteeChat} />
        <Route path="/teams" Component={Teams} />
        <Route path="/updateResources" Component={UpdateResources} />
      </Routes>
    </NativeRouter>
  );
};

export default App;


