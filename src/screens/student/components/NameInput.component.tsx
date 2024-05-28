import StudentInputControllerComponent from './StudentInputController.component';

export default function NameInputComponent() {
  return (
    <StudentInputControllerComponent
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
