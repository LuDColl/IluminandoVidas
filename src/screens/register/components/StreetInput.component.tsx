import InputControlComponent from './InputControl.component';

export default function StreetInputComponent() {
  return (
    <InputControlComponent
      name="street"
      rules={{ required: 'Rua obrigatória' }}
      label="Endereço"
    />
  );
}
