import { Appbar } from 'react-native-paper';

export default function AppbarComponent() {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Cadastro" />
    </Appbar.Header>
  );
}
