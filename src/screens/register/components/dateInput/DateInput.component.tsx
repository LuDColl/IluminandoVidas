import { DatePickerInput } from 'react-native-paper-dates';
import ControlComponent from '../Control.component';
import useDateInput from './DateInput.hooks';
import { FieldPath } from 'react-hook-form';
import RegisterForm from 'screens/register/models/register.form';
import { DateInputPropsType } from './DateInput.types';

export default function DateInputComponent<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
>({ control, rules, label, name }: DateInputPropsType<TName>) {
  const { date, inputToDate, inputToInput } = useDateInput();

  return (
    <ControlComponent
      control={control}
      rules={rules}
      name={name}
      render={({ onChange, onBlur, disabled, hasError }) => (
        <DatePickerInput
          mode="outlined"
          locale="pt-BR"
          label={label}
          hasError={hasError}
          value={date}
          onBlur={onBlur}
          onChange={inputToDate(onChange)}
          onChangeText={inputToInput(onChange)}
          disabled={disabled}
          inputMode="start"
        />
      )}
    />
  );
}
