import { TextInput } from 'react-native-paper';
import TextInputComponent from '../TextInput.component';
import useStartDate from './StartDate.hooks';
import { StartDatePropsType } from './StartDate.types';

export default function StartDateComponent({
  control,
  setStartDate,
  getStartDate,
}: StartDatePropsType) {
  const { showDatePicker } = useStartDate({ setStartDate, getStartDate });
  return (
    <TextInputComponent
      control={control}
      name="startDate"
      label="Data de Início"
      editable={false}
      right={<TextInput.Icon icon="calendar" onPress={showDatePicker} />}
    />
  );
}
