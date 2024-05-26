import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonComponent({
  onPress,
  style,
}: {
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | undefined;
}) {
  return (
    <Button mode="elevated" onPress={onPress} style={style}>
      Cadastrar
    </Button>
  );
}
