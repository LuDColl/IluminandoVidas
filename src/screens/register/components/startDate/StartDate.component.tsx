import { TextInput } from 'react-native-paper';
import TextInputComponent from '../TextInput.component';
import useStartDate from './StartDate.hooks';
import { StartDatePropsType } from './StartDate.types';
import { useState } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

export default function StartDateComponent({
  control,
  setStartDate,
  getStartDate,
}: StartDatePropsType) {
  const [inputDate, setInputDate] = useState<Date | undefined>(undefined);
  const { showDatePicker } = useStartDate({ setStartDate, getStartDate });
  return (
    <DatePickerInput
      mode="outlined"
      locale="pt-BR"
      label="Data de início"
      value={inputDate}
      onChange={(d) => setInputDate(d)}
      inputMode="start"
    />
  );
}
