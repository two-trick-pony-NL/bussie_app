import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import * as Location from 'expo-location';

import MapView from 'react-native-maps';
import Pins from './Pins'

const Map = () =>{
  const [location, setLocation] = useState({
    "coords": {
      "accuracy": 35,
      "altitude": 4.387582257390022,
      "altitudeAccuracy": 11.948752403259277,
      "heading": -1,
      "latitude": 52.1326,
      "longitude": 5.2913,
      "speed": -1,
    },
    "timestamp": 1666698894598.966,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = '';
    
  }
        return (
            <View style={styles.container}>
                <MapView 
                style={styles.map}
                showsUserLocation= {true}
                initialRegion={{
                  latitude: location.coords.latitude, 
                longitude: location.coords.longitude,
                  latitudeDelta: 2.922,
                  longitudeDelta: 1.821,
                }}
                mapType="mutedStandard"
                >
                  <Pins/>
                </MapView>
            </View>
        );
}
export default Map;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: ((Dimensions.get('window').height)/3)*2,
    },
  });