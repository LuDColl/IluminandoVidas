import InputControlComponent from './InputControl.component';

export default function DadInputComponent() {
  return (
    <InputControlComponent
      name="dad"
      rules={{ required: 'Nome do Pai obrigatório' }}
      label="Pai"
    />
  );
}
