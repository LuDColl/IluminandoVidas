import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const MomNumberInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="momNumber"
      rules={{ required: 'Número da Mãe obrigatório' }}
      label="Número"
    />
  );
};

export default MomNumberInputComponent;
