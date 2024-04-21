import { RegisterControlType } from 'screens/register/Register.types';
import DateInputComponent from './DateInput.component';

const StartDateInputComponent = ({ control }: RegisterControlType) => {
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
};

export default StartDateInputComponent;
