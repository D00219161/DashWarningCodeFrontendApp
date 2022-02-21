import React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// Background Image
import localImage from '../assets/images/background-image/Background-Image.png';
import navigation from '../navigation';

// const localImage = require("../assets/images/background-image/Background-Image.png");

const Separator = () => (
  <View style={styles.separator} />
);

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ImageBackground source={localImage} style={styles.container}>
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To Dash Warning</Text>       
        <div>
        <Text style={styles.title}>Already Have An Account?</Text>   
        <Button title="Login" onPress={() => navigation.navigate('Service')} />

        <Separator />

        <Text style={styles.title}></Text>   
        <Button title="Create Account" onPress={() => navigation.navigate('Service')} />

        <Separator />

        <Text style={styles.title}></Text>   
        <Button title="Not Now" onPress={() => navigation.navigate('Scan')} />
        </div>
      </View>
      </ImageBackground>
  );
}

/** Routing Between Pages
 * <TouchableOpacity onPress={() => navigation.navigate('MostCommonFaults')}style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#17A99A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
    //: '#17A99A',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:
  {

  }
});
