import { FieldPath } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import RegisterForm from 'screens/register/models/register.form';
import ControlComponent from './Control.component';
import { ControlBasePropsType } from '../Register.types';

type TextInputPropsType<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
> = {
  label: string;
  right?: React.ReactNode;
  editable?: boolean;
} & ControlBasePropsType<TName>;

export default function TextInputComponent<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
>({
  name,
  rules,
  label,
  control,
  style,
  right,
  editable,
}: TextInputPropsType<TName>) {
  return (
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
          value={value}
          error={hasError}
          right={right}
          editable={editable}
        />
      )}
    />
  );
}
