import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const DadNumberInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="dadNumber"
      rules={{ required: 'Número do Pai obrigatório' }}
      label="Número"
    />
  );
};

export default DadNumberInputComponent;
