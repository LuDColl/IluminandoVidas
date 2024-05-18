import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const DadInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="dad"
      rules={{ required: 'Nome do Pai obrigatório' }}
      label="Pai"
    />
  );
};

export default DadInputComponent;
