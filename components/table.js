import React, {Component} from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';



const Table = () =>{
        return (
            <View style={styles.container}>
                <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Lijn:</DataTable.Title>
                    <DataTable.Title >Aankomst in:</DataTable.Title>
                    <DataTable.Title >Naar:</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell >73</DataTable.Cell>
                    <DataTable.Cell >176 s</DataTable.Cell>
                    <DataTable.Cell>Zeist</DataTable.Cell>       
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >73</DataTable.Cell>
                    <DataTable.Cell >6 s</DataTable.Cell>
                    <DataTable.Cell>Maarssen</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >28</DataTable.Cell>
                    <DataTable.Cell >65 s</DataTable.Cell>
                    <DataTable.Cell>Vleuterweide (Winkelcentrum)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >28</DataTable.Cell>
                    <DataTable.Cell >405 s</DataTable.Cell>
                    <DataTable.Cell>De Uithof (Science Park)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >5</DataTable.Cell>
                    <DataTable.Cell >6 s</DataTable.Cell>
                    <DataTable.Cell>Oog in Al</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >73</DataTable.Cell>
                    <DataTable.Cell >176 s</DataTable.Cell>
                    <DataTable.Cell>Zeist</DataTable.Cell>       
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >73</DataTable.Cell>
                    <DataTable.Cell >6 s</DataTable.Cell>
                    <DataTable.Cell>Maarssen</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >28</DataTable.Cell>
                    <DataTable.Cell >65 s</DataTable.Cell>
                    <DataTable.Cell>Vleuterweide (Winkelcentrum)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >28</DataTable.Cell>
                    <DataTable.Cell >405 s</DataTable.Cell>
                    <DataTable.Cell>De Uithof (Science Park)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell >5</DataTable.Cell>
                    <DataTable.Cell >6 s</DataTable.Cell>
                    <DataTable.Cell>Oog in Al</DataTable.Cell>
                </DataTable.Row>

               
               

                
                </DataTable>
            </View>
        );
}
export default Table;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });