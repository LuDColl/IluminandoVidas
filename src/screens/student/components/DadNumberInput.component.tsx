import StudentInputControllerComponent from './StudentInputController.component';

export default function DadNumberInputComponent() {
  return (
    <StudentInputControllerComponent
      name="dadNumber"
      rules={{ required: 'Número do Pai obrigatório' }}
      label="Número"
      keyboardType="numeric"
    />
  );
}
