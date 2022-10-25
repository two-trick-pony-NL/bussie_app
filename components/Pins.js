import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import { Title } from 'react-native-paper';

const Pins = () =>{
        return (   
            <>         
            <Marker coordinate={{
                latitude: 52.0931467, 
                longitude: 5.1186557
            }}>
          <Callout> 
            <Title>Neude</Title>
          <Text>Jouw Dichtsbijzijnde halte</Text>
        </Callout>
          </Marker>
            </>
     
    );
}
export default Pins;