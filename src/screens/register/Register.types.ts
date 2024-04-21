import { Control, FieldPath, RegisterOptions } from 'react-hook-form';
import RegisterForm from 'screens/register/models/register.form';

export type ControlPropsType = {
  control: Control<RegisterForm>;
};

export type RegisterFieldPathType = FieldPath<RegisterForm>;

export type RulesInputControlType<TName extends RegisterFieldPathType> = Omit<
  RegisterOptions<RegisterForm, TName>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

export type InputControlPropsType<TName extends RegisterFieldPathType> = {
  name: TName;
  rules?: RulesInputControlType<TName>;
} & ControlPropsType;
