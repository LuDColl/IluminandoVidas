import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const SchoolInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="school"
      rules={{ required: 'Escola obrigatória' }}
      label="Escola"
    />
  );
};

export default SchoolInputComponent;
