import TextInputComponent from '../textInput/TextInput.component';
import { NumberInputPropsType } from './NumberInput.types';

export default function NumberInputComponent({
  control,
  style,
}: NumberInputPropsType) {
  return (
    <TextInputComponent
      control={control}
      name="number"
      rules={{ required: 'Número obrigatório' }}
      label="Número"
      style={style}
    />
  );
}
