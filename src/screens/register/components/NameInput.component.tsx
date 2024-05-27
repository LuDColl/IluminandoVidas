import RegisterInputControllerComponent from './RegisterInputController.component';

export default function NameInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
