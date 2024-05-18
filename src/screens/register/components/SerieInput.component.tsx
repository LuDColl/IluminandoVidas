import { RegisterControlType } from 'screens/register/Register.types';
import InputControlComponent from './InputControl.component';

const SerieInputComponent = ({ control }: RegisterControlType) => {
  return (
    <InputControlComponent
      control={control}
      name="serie"
      rules={{ required: 'Série obrigatória' }}
      label="Série"
    />
  );
};

export default SerieInputComponent;
