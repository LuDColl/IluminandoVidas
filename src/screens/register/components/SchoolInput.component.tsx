import RegisterInputControllerComponent from './RegisterInputController.component';

export default function SchoolInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="school"
      rules={{ required: 'Escola obrigatória' }}
      label="Escola"
    />
  );
}
