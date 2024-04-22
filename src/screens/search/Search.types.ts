import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Key } from 'react';
import { RootStackParamList } from 'router';

export interface ItemSearch {
  key: Key;
  title: string;
}

export type SearchScreenPropsType = NativeStackScreenProps<
  RootStackParamList,
  'Search'
>;

export type SearchScreenParamsType = {
  query?: string;
  placeholder?: string;
  items: ItemSearch[];
};
