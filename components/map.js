
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import LocationDot from './LocationDot'

const Map = () =>{
        return (
            <View style={styles.container}>
                <MapView 
                style={styles.map}
                showsUserLocation= {true}
                initialRegion={{
                  latitude: 52.0907, 
                longitude: 5.1214,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }}
                mapType="mutedStandard"
                >
                  <LocationDot></LocationDot>
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