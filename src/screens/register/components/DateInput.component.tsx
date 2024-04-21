import { DatePickerInput } from 'react-native-paper-dates';
import ControlComponent from './Control.component';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from 'screens/register/Register.types';
import { ReactNode, useState } from 'react';

type InputToDateType = (
  onChange: InputType
) => (date: Date | undefined) => void;

type InputToInputType = (onChange: InputType) => InputType;

type InputType = (startDate: string | undefined) => void;

const useDateInput = () => {
  const formatter = new Intl.DateTimeFormat('pt-BR');
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
};

type DateInputType = <TName extends RegisterFieldPathType>(
  props: { label: string } & InputControlPropsType<TName>
) => ReactNode;

const DateInputComponent: DateInputType = ({ control, rules, label, name }) => {
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
};

export default DateInputComponent;
