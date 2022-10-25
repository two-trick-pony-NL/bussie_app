import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import React, { useState, useEffect, useCallback } from 'react';
import { Title } from 'react-native-paper';
import * as Location from 'expo-location';


//This view receives the users Coordinates through the location prop
//Then submits that location to the backend
// What is returned is an object with the closest station given the users location. 

const Pins = () =>{
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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("Data from API:")
  console.log(data);
  console.log("Location data from GPS")

  useEffect(() => {
    (async () => {
      
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    fetch('https://bussie-backend.vdotvo9a4e2a6.eu-central-1.cs.amazonlightsail.com/get_closest_stations/?latitude='+parseFloat(location.coords.latitude)+'&longitude='+parseFloat(location.coords.longitude))
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    })();
  }, []);

  return ( 
      <>         
    {isLoading ? <Text>Loading...</Text> : 
      (<Marker coordinate={{
        latitude: data.lat, 
        longitude: data.lon
         }}>
            <Callout> 
            <Title>{data.TimingPointName}</Title>
            <Text>Jouw Dichtsbijzijnde halte</Text>
          </Callout>
        </Marker>)}
      </>

);
  }
export default Pins;