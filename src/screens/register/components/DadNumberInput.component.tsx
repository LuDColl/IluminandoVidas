import RegisterInputControllerComponent from './RegisterInputController.component';

export default function DadNumberInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="dadNumber"
      rules={{ required: 'Número do Pai obrigatório' }}
      label="Número"
    />
  );
}
