import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreenParamsType } from 'screens/search/Search.types';

export type RootStackParamList = {
  Register: undefined;
  Search: SearchScreenParamsType;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
