/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import React from 'react';
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Signin: {
            screens: {
              SigninScreen: 'Signin',
            },
          }, 
          CreateAccount: {
            screens: {
              CreateAccountScreen: 'Create Account',
            },
          }, 
          UserAccount: {
            screens: {
              UserAccountScreen: 'User Account',
            },
          },
          Scan: {
            screens: {
              ScanScreen: 'Scan',
            },
          }, 
          Scanning: {
            screens: {
              ScanningScreen: 'Scanning',
            },
          },  
          Display: {
            screens: {
              DisplayScreen: 'Display',
            },
          },   
          Service: {
            screens: {
              ServiceScreen: 'service',
            },
          }, 
          MostCommonFaults: {
            screens: {
              MostCommonFaultsScreen: 'MostCommonFaults',
            },
          }, 
          RedFaults: {
            screens: {
              RedFaultsScreen: 'RedFaults',
            },
          },
          AmberFaults: {
            screens: {
              AmberFaultsScreen: 'AmberFaults',
            },
          },
          GreenFaults: {
            screens: {
              GreenFaultsScreen: 'GreenFaults',
            },
          },
          ElectricFaults: {
            screens: {
              ElectricFaultsScreen: 'ElectricFaults',
            },
          },
          Forum: {
            screens: {
              ForumScreen: 'Forum',
            },
          },
      },
    },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
