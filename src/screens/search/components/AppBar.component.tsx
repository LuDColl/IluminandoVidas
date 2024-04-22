import { ReactNode } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';

type AppBarType = (props: {
  placeholder?: string;
  query: string;
  setQuery: (query: string) => void;
}) => ReactNode;

const AppBarComponent: AppBarType = ({ placeholder, query, setQuery }) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content
        title={
          <Searchbar
            mode="bar"
            placeholder={placeholder}
            onChangeText={setQuery}
            value={query}
          />
        }
      />
    </Appbar.Header>
  );
};

export default AppBarComponent;
