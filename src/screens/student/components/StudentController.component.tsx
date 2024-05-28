import {
  ControllerRenderProps,
  FieldPath,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import StudentForm from '../models/student.form';
import { ReactElement } from 'react';
import ControllerComponent from 'components/Controller.component';

export default function StudentControlComponent<
  TName extends FieldPath<StudentForm>
>({
  style,
  name,
  rules,
  render,
}: {
  style?: StyleProp<ViewStyle>;
  name: TName;
  rules?: Omit<
    RegisterOptions<StudentForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  render: (
    props: { hasError: boolean } & ControllerRenderProps<StudentForm, TName>
  ) => ReactElement;
}) {
  const { control } = useFormContext<StudentForm>();

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
