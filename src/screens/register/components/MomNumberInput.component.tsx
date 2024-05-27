import RegisterInputControllerComponent from './RegisterInputController.component';

export default function MomNumberInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="momNumber"
      rules={{ required: 'Número da Mãe obrigatório' }}
      label="Número"
    />
  );
}
