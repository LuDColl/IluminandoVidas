import InputControlComponent from './InputControl.component';

export default function SchoolInputComponent() {
  return (
    <InputControlComponent
      name="school"
      rules={{ required: 'Escola obrigatória' }}
      label="Escola"
    />
  );
}
