import { StyleProp, View, ViewStyle } from 'react-native';
import InputControlComponent from './InputControl.component';
import { RegisterControlType } from 'screens/register/Register.types';
import ImageMenuComponent from './imageMenu/ImageMenu.component';
import { ReactNode } from 'react';

type NumberInputType = (
  props: {
    style?: StyleProp<ViewStyle> | undefined;
  } & RegisterControlType
) => ReactNode;

const NumberInputComponent: NumberInputType = ({ control, style }) => (
  <View style={viewStyle}>
    <InputControlComponent
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
