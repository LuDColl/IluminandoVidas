import StudentPhoneInputControllerComponent from './StudentPhoneInputController.component';

export default function DadNumberInputComponent() {
  return (
    <StudentPhoneInputControllerComponent
      maskedName="dadMaskedNumber"
      label="Número"
      unmaskedName="dadNumber"
    />
  );
}
