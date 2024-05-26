import InputControlComponent from './InputControl.component';

export default function DadNumberInputComponent() {
  return (
    <InputControlComponent
      name="dadNumber"
      rules={{ required: 'Número do Pai obrigatório' }}
      label="Número"
    />
  );
}
