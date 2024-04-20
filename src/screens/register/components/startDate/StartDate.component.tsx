import { DatePickerInput } from 'react-native-paper-dates';
import ControlComponent from '../Control.component';
import { InputPropsType } from 'screens/register/Register.types';
import { useState } from 'react';
import useStartDate from './StartDate.hooks';

const formatter = new Intl.DateTimeFormat('pt-BR');

export default function StartDateComponent({ control }: InputPropsType) {
  const { date, startDateToDate, startDateToStartDate } = useStartDate();

  return (
    <ControlComponent
      control={control}
      rules={{
        required: 'Data de início obrigatória',
        minLength: { value: 10, message: 'Data de início inválida' },
      }}
      name="startDate"
      render={({ onChange, onBlur, disabled, hasError }) => (
        <DatePickerInput
          mode="outlined"
          locale="pt-BR"
          label="Data de início"
          hasError={hasError}
          value={date}
          onBlur={onBlur}
          onChange={startDateToDate(onChange)}
          onChangeText={startDateToStartDate(onChange)}
          disabled={disabled}
          inputMode="start"
        />
      )}
    />
  );
}
