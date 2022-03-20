// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


const Separator = () => (
  <View style={styles.separator} />
);

export default function QAScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Detect Fault Q&A</Text>   
        <Separator/>

        <Text style={styles.title}>What Colour if the Fault</Text>   
        <Pressable style={styles.button} onPress={() => navigation.navigate('RedFault')}>
        <Text style={styles.text}>Red</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('AmberFault')}>
        <Text style={styles.text}>Amber</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('GreenFault')}>
        <Text style={styles.text}>Green / Blue</Text>
        </Pressable>

        <Separator/>

        <Text style={styles.title}>How Many Times did it appear</Text> 
        <Button
        title="1"
        onPress={() => Alert.alert('Button Pressed')}
      />
       <Button
        title="2"
        onPress={() => Alert.alert('Button Pressed')}
      />
       <Button
        title="3"
        onPress={() => Alert.alert('Button Pressed')}
      />
       <Button
        title="4"
        onPress={() => Alert.alert('Button Pressed')}
      />
      <Separator/>

      <Text style={styles.title}>Did the fault produce any sound?</Text> 
      <Button
        title="Yes"
        onPress={() => Alert.alert('Button Pressed')}
      />
      <Button
        title="No"
        onPress={() => Alert.alert('Button Pressed')}
      />
      </View>
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
    height: '20%',
    padding: 5,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
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
});
