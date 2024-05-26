import { ScrollView } from 'react-native';
import AppBarComponent from './components/AppBar.component';
import { List } from 'react-native-paper';
import { SearchScreenPropsType } from './Search.types';
import { useSearch } from './Search.hooks';

export default function SearchScreen({
  route,
  navigation,
}: SearchScreenPropsType) {
  const { filtredItems, placeholder, query, setQuery } = useSearch(route);

  const mappedItems = filtredItems.map((item) => (
    <List.Item
      key={item.key}
      title={item.title}
      onPress={() => navigation.navigate('Register', { city: item.title })}
    />
  ));

  return (
    <>
      <AppBarComponent
        placeholder={placeholder}
        query={query}
        setQuery={setQuery}
        navigation={navigation}
      />
      <ScrollView style={{ padding: 16 }}>{mappedItems}</ScrollView>
    </>
  );
}
