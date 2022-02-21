// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, Pressable} from 'react-native';
import { max } from 'react-native-reanimated';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function MostCommonFaultsScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.separator}>
      <Text style={styles.title}>Most Common Faults</Text>

      <Text onPress={() => navigation.navigate('RedFault')} style={styles.title}>Red Faults</Text>
      <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={{width: 500, height: 400}} 
        source={require('../assets/images/RedFaults/OilPressureWarningLight.jpg')}/>
         <Separator />
        
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={{width: 500, height: 400}} 
        source={require('../assets/images/RedFaults/SeatbeltWarningLight.jpg')}/>
          </View>
        </View>

      <Separator />

      <Text onPress={() => navigation.navigate('AmberFault')} style={styles.title}>Amber Faults</Text>
      <Separator />

      <Text onPress={() => navigation.navigate('GreenFault')} style={styles.title}>Green and Blue Faults</Text>
      <Separator />

      <Text onPress={() => navigation.navigate('ElectricFault')} style={styles.title}>Electric and Hybrid Faults</Text>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#737373',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
  box:{
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
