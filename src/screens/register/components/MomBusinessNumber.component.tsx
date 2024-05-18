import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const MomBusinessNumberInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="momBusinessNumber"
      rules={{ required: 'Número Comercial da Mãe obrigatório' }}
      label="Número Comercial"
    />
  );
};

export default MomBusinessNumberInputComponent;
