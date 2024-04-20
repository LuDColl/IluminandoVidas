import { useState } from 'react';
import { StartDateToDateType, StartDateToStartDate } from './StartDate.types';

const formatter = new Intl.DateTimeFormat('pt-BR');

export default function useStartDate() {
  const [date, setDate] = useState<Date>();

  const startDateToDate: StartDateToDateType = (onChange) => (date) => {
    setDate(date);
    const startdate = formatter.format(date);
    onChange(startdate);
  };

  const startDateToStartDate: StartDateToStartDate = (onChange) => {
    return (startDate) => {
      onChange(startDate);

      if (startDate?.length != 10) return;
      const [day, month, year] = startDate.split('/');
      const date = new Date(+year, +month - 1, +day);
      setDate(date);
    };
  };

  return { startDateToDate, startDateToStartDate, date };
}
