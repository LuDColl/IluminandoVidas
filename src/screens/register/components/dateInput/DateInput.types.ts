import { FieldPath } from 'react-hook-form';
import { ControlBasePropsType } from 'screens/register/Register.types';
import RegisterForm from 'screens/register/models/register.form';

export type InputToDateType = (
  onChange: InputType
) => (date: Date | undefined) => void;

export type InputToInputType = (onChange: InputType) => InputType;

type InputType = (startDate: string | undefined) => void;

export type DateInputPropsType<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
> = { label: string } & ControlBasePropsType<TName>;
