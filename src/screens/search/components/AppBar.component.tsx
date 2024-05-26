import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Appbar, Searchbar } from 'react-native-paper';
import { RootStackParamList } from 'router';

export default function AppBarComponent({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) {
  const route = useRoute<RouteProp<RootStackParamList, 'Search'>>();
  const { placeholder } = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Search'>>();

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
}
