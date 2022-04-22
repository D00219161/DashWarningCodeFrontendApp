// Roadside Assistance Page
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, TouchableOpacity, Pressable, Platform, Linking, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function ServiceScreen({ navigation }: RootTabScreenProps<'Service'>) {
  {/* Make A Phone Call */}
  const makeCall = () => {

    let phoneNumber = '1234567890';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${}';
    } else {
      phoneNumber = 'telprompt:${}';
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
  
      {/* <Text style={styles.title}>Roadside Assistance Numbers</Text> */}
    
      <Text style={styles.title}>AA Roadside Assistance</Text>
      <Pressable style={styles.button}>
      <Text style={styles.text}>0818 66 77 88</Text>
      </Pressable>
     
      <Separator />
      <Text style={styles.title}>Police Service Number</Text>
      <Pressable style={styles.button} >
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />

      <Text style={styles.title}>Fire Service Number</Text>
      <Pressable style={styles.button} >
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />

      <Text style={styles.title}>Ambulance Service Number</Text>
      <Pressable style={styles.button} >
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />

      <Text style={styles.title}>Irish Towing Service Number</Text>
      <Pressable style={styles.button}>
      <Text style={styles.text}>01 429 8483</Text>
      </Pressable>

      <Separator />

      <Text style={styles.title}>Ring Any Number</Text>
      <Pressable onPress={makeCall} style={styles.touchableButton} >
          <Text style={styles.TextStyle}> Click Here To Dial</Text>
        </Pressable>
    </View>
    </ScrollView>
  );
}

//  <Button title="01 429 8483" onPress={() => Alert.alert('Simple Button pressed')}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    //color: '#17A99A',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 18,
    alignItems: 'center',
    justifyContent:'center', 
    flex: 1,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
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
  touchableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
