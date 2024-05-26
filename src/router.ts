import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Key } from 'react';

export type RootStackParamList = {
  Register?: { city?: string; id?: number };
  Search: {
    query?: string;
    placeholder?: string;
    items: {
      key: Key;
      title: string;
    }[];
  };
  Login: any;
  Home: any;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
