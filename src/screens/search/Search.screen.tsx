import { ScrollView, View } from 'react-native';
import AppBarComponent from './components/AppBar.component';
import { Key, useState } from 'react';
import { List } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';

export interface ItemSearch {
  key: Key;
  title: string;
}

type SearchScreenPropsType = NativeStackScreenProps<
  RootStackParamList,
  'Search'
>;

export type SearchScreenParamsType = {
  query?: string;
  placeholder?: string;
  items: ItemSearch[];
};

export default function SearchScreen({ route }: SearchScreenPropsType) {
  const { items, placeholder, query: initialQuery } = route.params;

  const [query, setQuery] = useState(initialQuery ?? '');

  const filtredItems = items.filter((item) => {
    const lowerTitle = item.title.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const includes = lowerTitle.includes(lowerQuery);
    return includes;
  });

  const mappedItems = filtredItems.map((item) => (
    <List.Item key={item.key} title={item.title} />
  ));

  return (
    <View>
      <AppBarComponent
        placeholder={placeholder}
        query={query}
        setQuery={setQuery}
      />
      <ScrollView style={{ padding: 16 }}>{mappedItems}</ScrollView>
    </View>
  );
}
