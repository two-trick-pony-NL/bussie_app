import React, { useState, useEffect } from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);
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

  let user_location = 'Waiting..';
  let user_longitude = 0;
  let user_latitude = 0;

  if (errorMsg) {
    user_location = errorMsg;
  } else if (location) {
    user_location = JSON.stringify(location)
    user_longitude = parseFloat(JSON.stringify(location.coords.longitude));
    user_latitude = parseFloat(JSON.stringify(location.coords.latitude));
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={{latitude: user_latitude, longitude: user_longitude}}>
        <Callout> 
          <Text>"This is you!"</Text>
        </Callout>
        </Marker>



      </MapView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});