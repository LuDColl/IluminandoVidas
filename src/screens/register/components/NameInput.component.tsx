import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const NameInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
};

export default NameInputComponent;
