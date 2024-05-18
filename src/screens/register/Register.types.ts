import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Control, FieldPath, RegisterOptions } from 'react-hook-form';
import { RootStackParamList } from 'router';
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

export type RegisterScreenParamsType = {
  city?: string;
};

export type RegisterScreenPropsType = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;
