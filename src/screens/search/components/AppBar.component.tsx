import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { RootStackParamList } from 'router';

type AppBarType = (props: {
  placeholder?: string;
  query: string;
  setQuery: (query: string) => void;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Search',
    undefined
  >;
}) => ReactNode;

const AppBarComponent: AppBarType = ({
  placeholder,
  query,
  setQuery,
  navigation,
}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
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
