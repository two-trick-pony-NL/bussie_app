import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import * as SplashScreen from 'expo-splash-screen';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();



export default function App() {
  const [location, setLocation] = useState({
    "coords": {
      "latitude": 52.387441699495454,
      "longitude": 4.832761490372075,
    }
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const [ClosestStop, setClosestStop] = useState(null);


  useEffect(() => {

    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      if ( user_location !== 'Waiting..') {
        setAppIsReady(true);
      }

      let location = await Location.getCurrentPositionAsync({});
      
      
      setLocation(location);
      function GetClosestStop() {
        fetch('https://bussie-backend.vdotvo9a4e2a6.eu-central-1.cs.amazonlightsail.com/get_closest_stations/?latitude='+parseFloat(JSON.stringify(location.coords.latitude))+'&longitude='+parseFloat(JSON.stringify(location.coords.longitude)))
        .then((response) => response.json())
        .then(({data}) => {setClosestStop(data)})
        .then((data) => console.log(data))
    }
    GetClosestStop();
    console.log(ClosestStop)
    setAppIsReady(true);
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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <MapView style={styles.map}>
        <Marker coordinate={{
          latitude: user_latitude, 
          longitude: user_longitude
          }}>
        <Callout> 
          <Text>"This is you!"</Text>
        </Callout>
        </Marker>

        <Marker coordinate={{
          latitude: user_latitude, 
          longitude: user_latitude
          }}>
          <Callout> 
          <Text>"This is your closest stop"</Text>
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