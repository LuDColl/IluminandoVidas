import PhoneInputControllerComponent from 'components/controllers/PhoneInputController.component';
import { FieldPath, useFormContext } from 'react-hook-form';
import StudentForm from '../models/student.form';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

export default function StudentPhoneInputControllerComponent<
  TMaskedName extends FieldPath<StudentForm>,
  TUnmaskName extends FieldPath<StudentForm>
>({
  maskedName,
  unmaskedName,
  label,
}: {
  maskedName: TMaskedName;
  unmaskedName: TUnmaskName;
  label?: TextInputLabelProp;
}) {
  const { control } = useFormContext<StudentForm>();
  return (
    <PhoneInputControllerComponent
      control={control}
      maskedName={maskedName}
      unmaskedName={unmaskedName}
      label={label}
    />
  );
}
