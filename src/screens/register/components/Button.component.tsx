import { StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

type ButtonPropsType = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const ButtonComponent = ({ onPress, style }: ButtonPropsType) => {
  return (
    <Button mode="elevated" onPress={onPress} style={style}>
      Cadastrar
    </Button>
  );
};

export default ButtonComponent;
