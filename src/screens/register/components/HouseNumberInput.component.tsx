import InputControlComponent from './InputControl.component';

export default function HouseNumberInput() {
  return (
    <InputControlComponent
      name="houseNumber"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
    />
  );
}
