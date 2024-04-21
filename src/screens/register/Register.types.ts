import { Control, FieldPath, RegisterOptions } from 'react-hook-form';
import RegisterForm from 'screens/register/models/register.form';

export type RegisterControlType = {
  control: Control<RegisterForm>;
};

export type RegisterFieldPathType = FieldPath<RegisterForm>;

export type ValuesType =
  | 'valueAsNumber'
  | 'valueAsDate'
  | 'setValueAs'
  | 'disabled';

export type RegisterOptionsType<TName extends RegisterFieldPathType> =
  RegisterOptions<RegisterForm, TName>;

export type RulesInputControlType<TName extends RegisterFieldPathType> = Omit<
  RegisterOptionsType<TName>,
  ValuesType
>;

export type InputControlPropsType<TName extends RegisterFieldPathType> = {
  name: TName;
  rules?: RulesInputControlType<TName>;
} & RegisterControlType;
