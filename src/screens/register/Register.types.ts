import { Control, FieldPath, RegisterOptions } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import RegisterForm from 'screens/register/models/register.form';

export type InputPropsType = {
  control: Control<RegisterForm>;
};

export type ControlBasePropsType<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
} & InputPropsType;
