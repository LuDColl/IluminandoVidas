import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import {
  RenderProps,
  TextInputLabelProp,
} from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';
import TextInputComponent from './TextInput.component';
import ControllerComponent from './Controller.component';

export default function InputControllerComponent<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  label,
  style,
  right,
  editable,
  keyboardType,
  secureTextEntry,
  render,
}: {
  control?: Control<TFieldValues>;
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
  right?: ReactNode;
  editable?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  render?: (props: RenderProps) => React.ReactNode;
}) {
  return (
    <ControllerComponent
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
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          render={render}
        />
      )}
    />
  );
}
