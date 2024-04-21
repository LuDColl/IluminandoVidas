import { StyleProp, View, ViewStyle } from 'react-native';
import TextInputComponent from './TextInput.component';
import { ControlPropsType } from 'screens/register/Register.types';
import ImageMenuComponent from './imageMenu/ImageMenu.component';
import { ReactNode } from 'react';

type NumberInputType = (
  props: {
    style?: StyleProp<ViewStyle> | undefined;
  } & ControlPropsType
) => ReactNode;

const NumberInputComponent: NumberInputType = ({ control, style }) => (
  <View style={viewStyle}>
    <TextInputComponent
      control={control}
      name="number"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
      style={style}
    />
    <ImageMenuComponent style={{ marginLeft: 16 }} />
  </View>
);

export default NumberInputComponent;

const viewStyle: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  alignItems: 'flex-start',
};
