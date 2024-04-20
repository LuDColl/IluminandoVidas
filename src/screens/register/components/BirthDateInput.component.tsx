import { InputPropsType } from 'screens/register/Register.types';
import DateInputComponent from './dateInput/DateInput.component';

export default function BirthDateInputComponent({ control }: InputPropsType) {
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
}
