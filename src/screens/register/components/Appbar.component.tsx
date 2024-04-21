import { Appbar } from 'react-native-paper';

export const AppbarComponent = () => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Cadastro" />
    </Appbar.Header>
  );
};

export default AppbarComponent;
