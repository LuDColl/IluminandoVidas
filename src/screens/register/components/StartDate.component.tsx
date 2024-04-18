import { DatePickerInput } from 'react-native-paper-dates';
import ControlComponent from './Control.component';
import { InputPropsType } from 'screens/register/Register.types';

export default function StartDateComponent({ control }: InputPropsType) {
  return (
    <ControlComponent
      control={control}
      name="startDate"
      render={({ onChange, value, onBlur, disabled, hasError }) => (
        <DatePickerInput
          mode="outlined"
          locale="pt-BR"
          label="Data de início"
          hasError={hasError}
          value={value}
          onBlur={onBlur}
          onChange={(date) => {
            control._setErrors({ startDate: undefined });
            onChange(date);
          }}
          onChangeText={(text) => {
            if (text?.length != 10)
              return control.setError('startDate', {
                message: 'Data de início inválida',
              });

            control._setErrors({ startDate: undefined });
            const [day, month, year] = text.split('/');
            const date = new Date(+year, +month - 1, +day);
            onChange(date);
          }}
          disabled={disabled}
          inputMode="start"
        />
      )}
    />
  );
}
