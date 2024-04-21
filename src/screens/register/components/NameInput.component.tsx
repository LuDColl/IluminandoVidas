import { RegisterControlType } from 'screens/register/Register.types';
import ControlInputComponent from './ControlInput.component';

export default function NameInputComponent({ control }: RegisterControlType) {
  return (
    <ControlInputComponent
      control={control}
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
