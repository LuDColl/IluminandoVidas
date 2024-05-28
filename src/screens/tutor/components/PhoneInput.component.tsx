import PhoneInputControllerComponent from 'components/controllers/PhoneInputController.component';
import TutorForm from '../models/tutor.form';
import { useFormContext } from 'react-hook-form';

export default function PhoneInputComponent() {
  const { control } = useFormContext<TutorForm>();
  return (
    <PhoneInputControllerComponent
      control={control}
      maskedName="maskedPhone"
      unmaskedName="phone"
      label="Telefone"
    />
  );
}
