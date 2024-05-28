import StudentInputControllerComponent from './StudentInputController.component';

export default function HouseNumberInput() {
  return (
    <StudentInputControllerComponent
      name="houseNumber"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
    />
  );
}
