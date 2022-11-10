import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import React, { useState, useEffect, useCallback } from 'react';
import { Title } from 'react-native-paper';
import * as Location from 'expo-location';
import { DataTable } from 'react-native-paper';


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
  //console.log("Data from API:")
  //console.log(data);
  //console.log("Location data from GPS")

  useEffect(() => {
    (async () => {
      
      
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    fetch('https://https://bussie.vdotvo9a4e2a6.eu-central-1.cs.amazonlightsail.com/get_closest_stations/?latitude='+parseFloat(location.coords.latitude)+'&longitude='+parseFloat(location.coords.longitude))

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
          <Text>Jouw Dichtsbijzijnde halte</Text>
            <Title>{data.TimingPointName}</Title>
            
            <>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{flex: 1}}>Lijn:</DataTable.Title>
                    <DataTable.Title style={{flex: 1}}>Platform:</DataTable.Title>
                    <DataTable.Title style={{flex: 1}} >Afstand:</DataTable.Title>
                    <DataTable.Title style={{flex: 2}} >Naar:</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚌 73</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>C3</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>50m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Zeist</DataTable.Cell>       
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚌 73</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>D3</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>1244m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Maarssen</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚈 28</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>Z4</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}> 2585m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Vleuterweide (Winkelcentrum)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚈 28</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>Z5</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>4m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>De Uithof (Science Park)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚅 5</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>5</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>603m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Den Haag (Centraal)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}>🚇 58</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}></DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>876m</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Schiphol Airport</DataTable.Cell>
                </DataTable.Row>
                </DataTable>
                </>
          </Callout>
        </Marker>)}
      </>

);
  }
export default Pins;
