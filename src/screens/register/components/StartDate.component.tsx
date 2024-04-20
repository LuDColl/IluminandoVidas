import { InputPropsType } from 'screens/register/Register.types';
import DateInputComponent from './dateInput/DateInput.component';

export default function StartDateInputComponent({ control }: InputPropsType) {
  return (
    <DateInputComponent
      control={control}
      label="Data de início"
      name="startDate"
      rules={{
        required: 'Data de início obrigatória',
        minLength: { value: 10, message: 'Data de início inválida' },
      }}
    />
  );
}
