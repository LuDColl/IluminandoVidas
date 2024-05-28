import StudentInputControllerComponent from './StudentInputController.component';

export default function StreetInputComponent() {
  return (
    <StudentInputControllerComponent
      name="street"
      rules={{ required: 'Rua obrigatória' }}
      label="Endereço"
    />
  );
}
