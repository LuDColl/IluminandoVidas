import { TextInput } from 'react-native-paper';
import ControlComponent from './Control.component';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from '../Register.types';
import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

type TextInputType = <TName extends RegisterFieldPathType>(
  props: {
    label: string;
    right?: React.ReactNode;
    editable?: boolean;
    style?: StyleProp<ViewStyle> | undefined;
  } & InputControlPropsType<TName>
) => ReactNode;

const TextInputComponent: TextInputType = ({
  name,
  rules,
  label,
  control,
  style,
  right,
  editable,
}) => (
  <ControlComponent
    control={control}
    name={name}
    rules={rules}
    style={style}
    render={({ onChange, onBlur, value, hasError }) => (
      <TextInput
        label={label}
        mode="outlined"
        onChangeText={onChange}
        onBlur={onBlur}
        value={value as string}
        error={hasError}
        right={right}
        editable={editable}
      />
    )}
  />
);

export default TextInputComponent;
