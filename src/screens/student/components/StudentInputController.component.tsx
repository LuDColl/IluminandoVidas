import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';
import StudentForm from '../models/student.form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';
import InputControllerComponent from 'components/InputControl.component';

export default function StudentInputControllerComponent<
  TName extends FieldPath<StudentForm>
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
    RegisterOptions<StudentForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
  right?: ReactNode;
  editable?: boolean | undefined;
}) {
  const { control } = useFormContext<StudentForm>();

  return (
    <InputControllerComponent
      control={control}
      name={name}
      editable={editable}
      label={label}
      right={right}
      rules={rules}
      style={style}
    />
  );
}
