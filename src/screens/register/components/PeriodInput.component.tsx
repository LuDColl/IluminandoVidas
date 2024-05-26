import InputControlComponent from './InputControl.component';

export default function PeriodInputComponent() {
  return (
    <InputControlComponent
      name="period"
      rules={{ required: 'Periodo obrigatório' }}
      label="Periodo"
    />
  );
}
