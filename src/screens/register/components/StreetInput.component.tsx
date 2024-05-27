import RegisterInputControllerComponent from './RegisterInputController.component';

export default function StreetInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="street"
      rules={{ required: 'Rua obrigatória' }}
      label="Endereço"
    />
  );
}
