import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import TutorForm from '../models/tutor.form';
import PasswordInputControllerComponent from 'components/controls/PasswordInputController.component';

export default function TutorPasswordInputControllerComponent<
  TName extends FieldPath<TutorForm>
>({
  name,
  rules,
  label,
  style,
}: {
  name: TName;
  rules?: Omit<
    RegisterOptions<TutorForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
}) {
  const { control } = useFormContext<TutorForm>();

  return (
    <PasswordInputControllerComponent
      control={control}
      name={name}
      label={label}
      rules={rules}
      style={style}
    />
  );
}
