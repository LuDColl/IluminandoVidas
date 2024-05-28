import ControllerComponent from 'components/Controller.component';
import PhoneInputComponent from 'components/inputs/PhoneInput.component';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

export default function PhoneInputControllerComponent<
  TFieldValues extends FieldValues,
  TMaskedName extends FieldPath<TFieldValues>,
  TUnmaskName extends FieldPath<TFieldValues>
>({
  label,
  maskedName,
  control,
  unmaskedName,
}: {
  label?: TextInputLabelProp;
  maskedName: TMaskedName;
  unmaskedName: TUnmaskName;
  control?: Control<TFieldValues>;
}) {
  const { field } = useController<TFieldValues>({ name: unmaskedName });
  return (
    <ControllerComponent
      control={control}
      name={maskedName}
      rules={{
        required: 'Telefone obrigatório',
        minLength: { value: 15, message: 'Telefone Inválido' },
      }}
      render={({ onChange }) => (
        <PhoneInputComponent
          label={label}
          onChangeText={onChange}
          onChangeUnmaskedText={field.onChange}
        />
      )}
    />
  );
}
