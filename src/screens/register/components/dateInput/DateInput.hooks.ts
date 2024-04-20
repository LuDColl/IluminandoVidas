import { useState } from 'react';
import { InputToDateType, InputToInputType } from './DateInput.types';

const formatter = new Intl.DateTimeFormat('pt-BR');

export default function useDateInput() {
  const [date, setDate] = useState<Date>();

  const inputToDate: InputToDateType = (onChange) => (date) => {
    setDate(date);
    const startdate = formatter.format(date);
    onChange(startdate);
  };

  const inputToInput: InputToInputType = (onChange) => (startDate) => {
    onChange(startDate);

    if (startDate?.length != 10) return;
    const [day, month, year] = startDate.split('/');
    const date = new Date(+year, +month - 1, +day);
    setDate(date);
  };

  return {
    inputToDate,
    inputToInput,
    date,
  };
}
