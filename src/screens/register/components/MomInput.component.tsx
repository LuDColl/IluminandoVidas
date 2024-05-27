import RegisterInputControllerComponent from './RegisterInputController.component';

export default function MomInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="mom"
      rules={{ required: 'Nome da Mãe obrigatório' }}
      label="Mãe"
    />
  );
}
