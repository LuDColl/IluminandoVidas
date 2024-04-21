import { ControlPropsType } from 'screens/register/Register.types';
import DateInputComponent from './DateInput.component';

export default function BirthDateInputComponent({ control }: ControlPropsType) {
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
