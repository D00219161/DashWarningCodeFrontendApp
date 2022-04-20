// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function RedFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      <Text style={styles.title}>Red Faults - Serious</Text>
        <Text style={styles.title}>Brake System Warning Light</Text>
        <Image source={require('../assets/images/RedFaults/brake_system_warning_light.jpg')}
          style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        The brake system warning light requires urgent attention. It could be caused that you’ve left the handbrake 
        slightly engaged while pulling away, so it’s best to ensure its fully released. If the light stays on, it 
        is best to seek assistance. The problem could be that your vehicle could have a brake fluid leak, a sensor 
        failure or need the brake pads replacing. 
        Safe to Drive: No
        Check you've released the handbrake fully. If you have, stop, check the brake fluid level, and top it up if 
        you need to. 
      </Text>
      </View>   

   <Separator/>

        <Text style={styles.title}>Battery Warning Light</Text>  
        <Image source={require('../assets/images/RedFaults/Battery.jpg')}
        style = {{height: 175, width: 200, resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        This warning light can indicate a number of issues, all relating to the cars battery and charging system. 
        This is a particular problem at night because a faulty battery can lead to headlights failing, but without 
        the battery or charging system providing electricity, you may find power steering, brake servos or the engine
        itself stop working. 
        Safe to Drive: No
        In this case it would be best to stop the vehicle in a safe place, turn off the engine and contact roadside 
        assistance or your local mechanic. It is advised not to restart the engine as it could make the problem worse.
        </Text>  
        </View>  

        <Separator/>

        <Text style={styles.title}>Oil Pressure  Warning Light</Text>  
        {/* <Image source={require('../assets/images/RedFaults/.jfif')}
         style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
        <View style={styles.box}>
        <Text style={styles.text}>
          
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Battery Warning Light</Text>  
        {/* <Image source={require('../assets/images/RedFaults/.jpg')}
         style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
        <View style={styles.box}>
        <Text style={styles.text}>
          
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Battery Warning Light</Text>  
        {/* <Image source={require('../assets/images/RedFaults/.jpg')}
         style = {{height: 175, width: 200, resizeMode : 'stretch',}} /> */}
        <View style={styles.box}>
        <Text style={styles.text}>
          
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Battery Warning Light</Text>  
        {/* <Image source={require('../assets/images/RedFaults/.jpg')}
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
    color: '#000',
    textAlign: 'center'
  },
  separator: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
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
