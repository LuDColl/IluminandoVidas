import RegisterInputControllerComponent from './RegisterInputController.component';

export default function DadInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="dad"
      rules={{ required: 'Nome do Pai obrigatório' }}
      label="Pai"
    />
  );
}
