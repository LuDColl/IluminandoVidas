import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const StreetInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="street"
      rules={{ required: 'Rua obrigatória' }}
      label="Endereço"
    />
  );
};

export default StreetInputComponent;
