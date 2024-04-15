import { StyleProp, View, ViewStyle } from 'react-native';
import TextInputComponent from './TextInput.component';
import MenuComponent from './menu/Menu.component';
import { InputPropsType } from 'screens/register/Register.types';

type NumberInputPropsType = {
  style?: StyleProp<ViewStyle> | undefined;
} & InputPropsType;

export default function NumberInputComponent({
  control,
  style,
}: NumberInputPropsType) {
  return (
    <View style={viewStyle}>
      <TextInputComponent
        control={control}
        name="number"
        rules={{ required: 'Número obrigatório' }}
        label="Número"
        style={style}
      />
      <MenuComponent style={{ marginLeft: 16 }} />
    </View>
  );
}

const viewStyle: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  alignItems: 'flex-start',
};
