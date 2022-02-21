// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, Alert, Image, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function ServiceScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/background-image/Background-Image.png')}/>
    <View style={styles.separator}>
      <Text style={styles.title}>Dash Warning</Text>
      <Separator />
      <Text style={styles.title}>Roadside Assistance</Text>
      <Separator />
      <Text style={styles.title}>AA RoadWatch</Text>
      <Button
        title="086 555 4532"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <p></p>
      <Separator />
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Separator />
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Separator />
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Separator />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    //color: '#17A99A',
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
