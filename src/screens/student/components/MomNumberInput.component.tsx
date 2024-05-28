import StudentPhoneInputControllerComponent from './StudentPhoneInputController.component';

export default function MomNumberInputComponent() {
  return (
    <StudentPhoneInputControllerComponent
      maskedName="momMaskedNumber"
      unmaskedName="momNumber"
      label="Número"
    />
  );
}
