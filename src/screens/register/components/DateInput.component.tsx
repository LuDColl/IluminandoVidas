import { DatePickerInput } from 'react-native-paper-dates';
import RegisterControlComponent from './RegisterController.component';
import { useState } from 'react';
import { FieldPath, RegisterOptions } from 'react-hook-form';
import RegisterForm from '../models/register.form';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

const formatter = new Intl.DateTimeFormat('pt-BR');

export default function DateInputComponent<
  TName extends FieldPath<RegisterForm>
>({
  rules,
  label,
  name,
}: {
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  name: TName;
  label?: TextInputLabelProp;
}) {
  const [date, setDate] = useState<Date>();

  const inputToDate =
    (onChange: (...event: any[]) => void) => (date: Date | undefined) => {
      setDate(date);
      const startdate = formatter.format(date);
      onChange(startdate);
    };

  const inputToInput =
    (onChange: (...event: any[]) => void) => (text: string | undefined) => {
      onChange(text);
      if (text?.length != 10) return;

      const [day, month, year] = text.split('/');
      const date = new Date(+year, +month - 1, +day);
      setDate(date);
    };

  return (
    <RegisterControlComponent
      rules={rules}
      name={name}
      render={({ onChange, onBlur, disabled, hasError, value }) => {
        let initalDate: Date | undefined;

        if (value?.length == 10) {
          const [day, month, year] = value.split('/');
          initalDate = new Date(+year, +month - 1, +day);
        }

        return (
          <DatePickerInput
            mode="outlined"
            locale="pt-BR"
            label={label}
            hasError={hasError}
            value={date ?? initalDate}
            onBlur={onBlur}
            onChange={inputToDate(onChange)}
            onChangeText={inputToInput(onChange)}
            disabled={disabled}
            inputMode="start"
          />
        );
      }}
    />
  );
}
