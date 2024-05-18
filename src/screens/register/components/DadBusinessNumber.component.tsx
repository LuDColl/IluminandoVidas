import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const DadBusinessNumberInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="dadBusinnessNumber"
      rules={{ required: 'Número Comercial do Pai obrigatório' }}
      label="Número Comercial"
    />
  );
};

export default DadBusinessNumberInputComponent;
