import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const HouseNumberInput = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="houseNumber"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
    />
  );
};

export default HouseNumberInput;
