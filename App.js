import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from 'react-native';
import Map from './components/map'
import Table from './components/table'




export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      productCount: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ flex: 2}}>
        <Map></Map>
        </View>
        <View style={{ flex: 1, backgroundColor: "darkblue", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <Text style={styles.Slogan}>
          <Text style={styles.Slogan}>Busje </Text>
          <Text style={styles.LightSlogan}>komt zo </Text>
        </Text>
        </View>
        <View style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <Text style={{paddingLeft:15, paddingRight:15, padding:2}}>Halte Neude is het dichtstbij gebaseerd op jouw locatie. Hier zijn de vertrektijden:</Text>
        <Table style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}></Table>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Slogan: {
      fontSize: 20,
      fontWeight: "bold", 
      color:"#FFF",
      padding: 2,
      paddingLeft:15,
      
    },
    LightSlogan: {
      fontSize: 20,
      fontWeight: "bold", 
      color:"#D3D3D3",
      fontStyle: 'italic',      
    },
    
  });

