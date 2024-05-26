import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import { RootStackParamList } from 'router';

export default function AppbarComponent() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Register'>>();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title="Cadastro" />
    </Appbar.Header>
  );
}
