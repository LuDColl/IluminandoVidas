import StudentInputControllerComponent from './StudentInputController.component';

export default function DadInputComponent() {
  return (
    <StudentInputControllerComponent
      name="dad"
      rules={{ required: 'Nome do Pai obrigatório' }}
      label="Pai"
    />
  );
}
