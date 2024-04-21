import { RegisterControlType } from 'screens/register/Register.types';
import TextInputComponent from './TextInput.component';

export default function NameInputComponent({ control }: RegisterControlType) {
  return (
    <TextInputComponent
      control={control}
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
