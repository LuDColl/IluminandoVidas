import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RootStackParamList } from 'router';

export default function AppbarComponent({
  title,
  style,
}: {
  title: ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Appbar.Header style={style}>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
