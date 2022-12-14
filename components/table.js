import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';



const Table = () =>{
        return (
            <View style={styles.container}>
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