import { StyleProp, ViewStyle } from 'react-native';
import { InputPropsType } from 'screens/register/Register.types';

export type NumberInputPropsType = {
  style?: StyleProp<ViewStyle> | undefined;
} & InputPropsType;
