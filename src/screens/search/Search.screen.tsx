import { FlatList, StyleSheet, View } from 'react-native';
import AppBarComponent from './components/AppBar.component';
import { List } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'router';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function SearchScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Search'>>();
  const { items, query: initialQuery } = route.params;
  const [query, setQuery] = useState(initialQuery ?? '');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Search'>>();

  const filtredItems = items.filter((item) => {
    const lowerTitle = item.title.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const includes = lowerTitle.includes(lowerQuery);
    return includes;
  });

  return (
    <View>
      <AppBarComponent query={query} setQuery={setQuery} />
      <FlatList
        data={filtredItems}
        style={styles.list}
        renderItem={(item) => {
          const { key, title } = item.item;
          return (
            <List.Item
              key={key}
              title={title}
              onPress={() => navigation.navigate('Register', { city: title })}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
});
