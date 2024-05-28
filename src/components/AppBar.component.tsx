import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { RootStackParamList } from 'router';

export default function AppbarComponent({ title }: { title: ReactNode }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
