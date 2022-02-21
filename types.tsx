/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  CreateAccount: undefined;
  Signin: undefined;
  Scan: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// Number of Screens - Roots (Either Numbers or Name of Pages) - Linking
export type RootTabParamList = {
  Home: undefined;
  CreateAccount: undefined;
  Signin: undefined;
  UserAccount: undefined;
  Scan: undefined;
  Scanning: undefined;
  Display: undefined;
  Service: undefined;
  MostCommonFaults: undefined;
  RedFaults: undefined;
  AmberFaults: undefined;
  GreenFaults: undefined;
  ElectricFaults: undefined;
  Forum: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
