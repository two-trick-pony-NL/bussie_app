import React, {Component} from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';


const Map = () =>{
        return (
            <View style={styles.container}>
                <MapView style={styles.map} />
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