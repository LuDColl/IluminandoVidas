import InputControlComponent from './InputControl.component';

export default function MomInputComponent() {
  return (
    <InputControlComponent
      name="mom"
      rules={{ required: 'Nome da Mãe obrigatório' }}
      label="Mãe"
    />
  );
}
