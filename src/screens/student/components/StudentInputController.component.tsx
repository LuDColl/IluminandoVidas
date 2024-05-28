import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';
import StudentForm from '../models/student.form';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';
import InputControllerComponent from 'components/controls/InputController.component';

export default function StudentInputControllerComponent<
  TName extends FieldPath<StudentForm>
>({
  name,
  rules,
  label,
  style,
  right,
  editable,
  keyboardType,
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
  keyboardType?: KeyboardTypeOptions | undefined;
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
      keyboardType={keyboardType}
    />
  );
}
