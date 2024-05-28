import StudentInputControllerComponent from './StudentInputController.component';

export default function MomInputComponent() {
  return (
    <StudentInputControllerComponent
      name="mom"
      rules={{ required: 'Nome da Mãe obrigatório' }}
      label="Mãe"
    />
  );
}
