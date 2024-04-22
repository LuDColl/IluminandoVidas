import { ScrollView, View } from 'react-native';
import AppBarComponent from './components/AppBar.component';
import { List } from 'react-native-paper';
import { SearchScreenPropsType } from './Search.types';
import { useSearch } from './Search.hooks';

export default function SearchScreen({ route }: SearchScreenPropsType) {
  const { filtredItems, placeholder, query, setQuery } = useSearch(route);

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
