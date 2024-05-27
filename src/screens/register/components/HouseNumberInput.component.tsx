import RegisterInputControllerComponent from './RegisterInputController.component';

export default function HouseNumberInput() {
  return (
    <RegisterInputControllerComponent
      name="houseNumber"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
    />
  );
}
