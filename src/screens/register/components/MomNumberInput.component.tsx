import InputControlComponent from './InputControl.component';

export default function MomNumberInputComponent() {
  return (
    <InputControlComponent
      name="momNumber"
      rules={{ required: 'Número da Mãe obrigatório' }}
      label="Número"
    />
  );
}
