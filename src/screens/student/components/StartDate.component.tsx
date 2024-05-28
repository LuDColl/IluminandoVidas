import DateInputComponent from './DateInput.component';

export default function StartDateInputComponent() {
  return (
    <DateInputComponent
      label="Data de início"
      name="startDate"
      rules={{
        required: 'Data de início obrigatória',
        minLength: { value: 10, message: 'Data de início inválida' },
      }}
    />
  );
}
