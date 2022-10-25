import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import { Title } from 'react-native-paper';

const LocationDot = () =>{
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
          <Circle 
                radius = { 25 }
                strokeWidth = { 2 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }   
                center={{
                    latitude: 52.0907, 
                    longitude: 5.1214
            }}>
            
                <Text>Jij</Text>
            
                
         </Circle>

          </>
     
    );
}
export default LocationDot;