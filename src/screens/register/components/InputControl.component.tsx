import ControlComponent from './Control.component';
import TextInputComponent from '../../../components/TextInput.component';
import { FieldPath, RegisterOptions } from 'react-hook-form';
import RegisterForm from '../models/register.form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';

export default function InputControlComponent<
  TName extends FieldPath<RegisterForm>
>({
  name,
  rules,
  label,
  style,
  right,
  editable,
}: {
  name: TName;
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
  right?: ReactNode;
  editable?: boolean | undefined;
}) {
  return (
    <ControlComponent
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
}
