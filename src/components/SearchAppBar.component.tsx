import { Searchbar } from 'react-native-paper';
import AppBarComponent from './AppBar.component';
import { StyleProp, TextStyle } from 'react-native';

export default function SearchBarComponent({
  query,
  setQuery,
  placeholder,
  style,
}: {
  query: string;
  setQuery: (query: string) => void;
  placeholder: string;
  style?: StyleProp<TextStyle> | undefined;
}) {
  return (
    <AppBarComponent
      style={style}
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
