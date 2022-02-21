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
              SigninScreen: 'signin',
            },
          }, 
          CreateAccount: {
            screens: {
              CreateAccountScreen: 'createaccount',
            },
          }, 
          UserAccount: {
            screens: {
              UserAccountScreen: 'useraccount',
            },
          },
          Scan: {
            screens: {
              ScanScreen: 'scan',
            },
          }, 
          Scanning: {
            screens: {
              ScanningScreen: 'scanning',
            },
          },  
          Display: {
            screens: {
              DisplayScreen: 'display',
            },
          },   
          Service: {
            screens: {
              ServiceScreen: 'service',
            },
          }, 
          MostCommonFaults: {
            screens: {
              MostCommonFaultsScreen: 'mostcommonfaults',
            },
          }, 
          RedFaults: {
            screens: {
              RedFaultsScreen: 'redfaults',
            },
          },
          AmberFaults: {
            screens: {
              AmberFaultsScreen: 'amberfaults',
            },
          },
          GreenFaults: {
            screens: {
              GreenFaultsScreen: 'greenfaults',
            },
          },
          ElectricFaults: {
            screens: {
              ElectricFaultsScreen: 'electricfaults',
            },
          },
          Forum: {
            screens: {
              ForumScreen: 'forum',
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
