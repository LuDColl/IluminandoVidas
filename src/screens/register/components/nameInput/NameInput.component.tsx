import { InputPropsType } from 'screens/register/Register.types';
import TextInputComponent from '../textInput/TextInput.component';

export default function NumbeInputComponent({ control }: InputPropsType) {
  return (
    <TextInputComponent
      control={control}
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
