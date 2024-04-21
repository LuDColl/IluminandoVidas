import { TextInput } from 'react-native-paper';
import ControlComponent from './Control.component';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from '../Register.types';
import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import TextInputComponent from './TextInput.component';

type TextInputType = <TName extends RegisterFieldPathType>(
  props: {
    label: string;
    right?: React.ReactNode;
    editable?: boolean;
    style?: StyleProp<ViewStyle> | undefined;
  } & InputControlPropsType<TName>
) => ReactNode;

const ControlInputComponent: TextInputType = ({
  name,
  rules,
  label,
  control,
  style,
  right,
  editable,
}) => {
  return (
    <ControlComponent
      control={control}
      name={name}
      rules={rules}
      style={style}
      render={({ onChange, onBlur, value, hasError }) => (
        <TextInputComponent
          label={label}
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
};

export default ControlInputComponent;
