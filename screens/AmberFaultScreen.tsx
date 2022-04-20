// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function AmberFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      <Text style={styles.title}>Amber Faults - Common</Text>
         <Text style={styles.title}>Check Engine Light</Text>
         <Image source={require('../assets/images/AmberFaults/CheckEngineLight.jpg')}
         style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>
        
        <Separator/>

         <Text style={styles.title}>Traction Control Warning Light</Text>
         <Image source={require('../assets/images/AmberFaults/TractionControlWarningLight.jpg')}
          style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
   
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Check Engine Light</Text>
        <Image source={require('../assets/images/AmberFaults/CheckEngineLight.jpg')} 
         style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
        <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>
      
        <Separator/>

        <Text style={styles.title}>Low Fuel Warning Light</Text>
        <Image source={require('../assets/images/AmberFaults/LowFuelWarningLight.jpg')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Lane Assist Warning Light</Text>
        {/* <Image source={require('../assets/images/AmberFaults/lane_assist.jfif')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
         <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Tyre Pressure Warning Light</Text>
        {/* <Image source={require('../assets/images/AmberFaults/tyre_pressure.jfif')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
         <View style={styles.box}>
         <Text style={styles.text}>

         <Separator/>

        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Air Suspension Warning Light</Text>
        {/* <Image source={require('../assets/images/AmberFaults/.jfif')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
         <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Break Warning Light</Text>
        {/* <Image source={require('../assets/images/AmberFaults/.jfif')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
         <View style={styles.box}>
         <Text style={styles.text}>

        </Text>
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#737373',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box:{
    width: '80%',
    padding: 8,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center'
  },
});
