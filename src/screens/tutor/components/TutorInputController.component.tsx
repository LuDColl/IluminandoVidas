import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import {
  RenderProps,
  TextInputLabelProp,
} from 'react-native-paper/lib/typescript/components/TextInput/types';
import { ReactNode } from 'react';
import TutorForm from '../models/tutor.form';
import InputControllerComponent from 'components/controls/InputController.component';

export default function TutorInputControllerComponent<
  TName extends FieldPath<TutorForm>
>({
  name,
  rules,
  label,
  style,
  right,
  editable,
  keyboardType,
  secureTextEntry,
  render,
}: {
  name: TName;
  rules?: Omit<
    RegisterOptions<TutorForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
  right?: ReactNode;
  editable?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  render?: (props: RenderProps) => React.ReactNode;
}) {
  const { control } = useFormContext<TutorForm>();

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
      secureTextEntry={secureTextEntry}
      render={render}
    />
  );
}
