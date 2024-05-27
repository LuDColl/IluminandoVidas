import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import {
  RenderProps,
  TextInputLabelProp,
} from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';
import InputControllerComponent from 'components/InputControl.component';
import UserRegisterForm from '../models/userRegister.form';

export default function UserRegisterInputControllerComponent<
  TName extends FieldPath<UserRegisterForm>
>({
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
  name: TName;
  rules?: Omit<
    RegisterOptions<UserRegisterForm, TName>,
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
  const { control } = useFormContext<UserRegisterForm>();

  return (
    <InputControllerComponent
      control={control}
      name={name}
      editable={editable}
      label={label}
      right={right}
      rules={rules}
      style={style}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      render={render}
    />
  );
}
