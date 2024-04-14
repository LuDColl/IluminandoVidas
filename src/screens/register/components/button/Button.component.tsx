import { Button } from 'react-native-paper';
import { ButtonPropsType } from './Button.types';

export default function ButtonComponent({ onPress, style }: ButtonPropsType) {
  return (
    <Button mode="elevated" onPress={onPress} style={style}>
      Cadastrar
    </Button>
  );
}
