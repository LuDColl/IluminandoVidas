import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreenParamsType } from 'screens/register/Register.types';
import { SearchScreenParamsType } from 'screens/search/Search.types';

export type RootStackParamList = {
  Register: RegisterScreenParamsType;
  Search: SearchScreenParamsType;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
