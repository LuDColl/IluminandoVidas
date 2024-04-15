import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { UseStartDatePropsType } from './StartDate.types';

const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export default function useStartDate({
  setStartDate,
  getStartDate,
}: UseStartDatePropsType) {
  const onChange = (_: DateTimePickerEvent, date?: Date) => {
    if (!date) return;
    const formatedDate = dateFormatter.format(date);
    setStartDate(formatedDate);
  };

  const showDatePicker = () => {
    let date = new Date();
    const startDate = getStartDate();
    if (startDate) {
      const [day, month, year] = startDate.split('/');
      date = new Date(+year, +month, +day);
    }
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  return { showDatePicker };
}
