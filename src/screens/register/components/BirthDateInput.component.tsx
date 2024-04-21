import { RegisterControlType } from 'screens/register/Register.types';
import DateInputComponent from './DateInput.component';

const BirthDateInputComponent = ({ control }: RegisterControlType) => {
  return (
    <DateInputComponent
      control={control}
      label="Data de nascimento"
      name="birthDate"
      rules={{
        required: 'Data de nascimento obrigatória',
        minLength: { value: 10, message: 'Data de nascimento inválida' },
      }}
    />
  );
};

export default BirthDateInputComponent;
