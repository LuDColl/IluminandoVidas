import { Searchbar } from 'react-native-paper';
import AppBarComponent from './AppBar.component';

export default function SearchBarComponent({
  query,
  setQuery,
  placeholder,
}: {
  query: string;
  setQuery: (query: string) => void;
  placeholder: string;
}) {
  return (
    <AppBarComponent
      title={
        <Searchbar
          mode="bar"
          placeholder={placeholder}
          onChangeText={setQuery}
          value={query}
          onClearIconPress={() => setQuery('')}
        />
      }
    />
  );
}
