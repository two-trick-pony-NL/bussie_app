import React, {Component} from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import MapView from 'react-native-maps';



const LocationDot = () =>{
        return (   
            <>         
            <Marker coordinate={{
                latitude: 0.1, 
                longitude: 1.0
            }}>
          <Callout> 
          <Text>"This is your closest stop"</Text>
        </Callout>
          </Marker>

          <Marker coordinate={{
            latitude: 1.0, 
            longitude: 0.1
            }}>
          <Callout> 
            <Text>"This is you!"</Text>
          </Callout>
          </Marker>
          </>
     
    );
}
export default LocationDot;