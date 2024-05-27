import {
  ControllerRenderProps,
  FieldPath,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import RegisterForm from '../models/register.form';
import { ReactElement } from 'react';
import ControllerComponent from 'components/Controller.component';

export default function RegisterControlComponent<
  TName extends FieldPath<RegisterForm>
>({
  style,
  name,
  rules,
  render,
}: {
  style?: StyleProp<ViewStyle>;
  name: TName;
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  render: (
    props: { hasError: boolean } & ControllerRenderProps<RegisterForm, TName>
  ) => ReactElement;
}) {
  const { control } = useFormContext<RegisterForm>();

  return (
    <ControllerComponent
      control={control}
      name={name}
      rules={rules}
      render={render}
      style={style}
    />
  );
}
