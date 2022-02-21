
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import UserAccountScreen from './UserAccountScreen';
import { useColorScheme } from 'react-native';
import { RootTabParamList } from '../types';

const Drawer = createDrawerNavigator<RootTabParamList>();

function NavBar() {
    const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="UserAccount" component={UserAccountScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
