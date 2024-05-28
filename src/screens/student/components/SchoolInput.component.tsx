import StudentInputControllerComponent from './StudentInputController.component';

export default function SchoolInputComponent() {
  return (
    <StudentInputControllerComponent
      name="school"
      rules={{ required: 'Escola obrigatória' }}
      label="Escola"
    />
  );
}
