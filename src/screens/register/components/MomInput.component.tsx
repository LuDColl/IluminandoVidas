import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const MomInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="mom"
      rules={{ required: 'Nome da Mãe obrigatório' }}
      label="Mãe"
    />
  );
};

export default MomInputComponent;
