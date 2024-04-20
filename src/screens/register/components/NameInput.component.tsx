import { InputPropsType } from 'screens/register/Register.types';
import TextInputComponent from './TextInput.component';

export default function NameInputComponent({ control }: InputPropsType) {
  return (
    <TextInputComponent
      control={control}
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
