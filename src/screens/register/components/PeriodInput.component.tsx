import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const PeriodInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="period"
      rules={{ required: 'Periodo obrigatório' }}
      label="Periodo"
    />
  );
};

export default PeriodInputComponent;
