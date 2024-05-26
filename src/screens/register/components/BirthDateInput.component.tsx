import DateInputComponent from './DateInput.component';

export default function BirthDateInputComponent() {
  return (
    <DateInputComponent
      label="Data de nascimento"
      name="birthDate"
      rules={{
        required: 'Data de nascimento obrigatória',
        minLength: { value: 10, message: 'Data de nascimento inválida' },
      }}
    />
  );
}
