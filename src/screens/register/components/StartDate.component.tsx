import { InputPropsType } from '../Register.types';
import TextInputComponent from './TextInput.component';

export default function StartDateComponent({ control }: InputPropsType) {
  return (
    <TextInputComponent
      control={control}
      name="startDate"
      label="Data de Início"
    />
  );
}
