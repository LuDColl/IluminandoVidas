import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import ControllerComponent from '../Controller.component';
import PasswordInputComponent from 'components/inputs/PasswordInput.component';

export default function PasswordInputControllerComponent<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  label,
  style,
}: {
  control?: Control<TFieldValues>;
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style?: StyleProp<ViewStyle>;
  label?: TextInputLabelProp;
}) {
  return (
    <ControllerComponent
      control={control}
      name={name}
      rules={rules}
      style={style}
      render={({ onChange, value, hasError }) => (
        <PasswordInputComponent
          label={label}
          setPassword={onChange}
          password={value as string}
          error={hasError}
        />
      )}
    />
  );
}
