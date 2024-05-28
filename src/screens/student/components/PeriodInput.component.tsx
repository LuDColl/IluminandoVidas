import StudentInputControllerComponent from './StudentInputController.component';

export default function PeriodInputComponent() {
  return (
    <StudentInputControllerComponent
      name="period"
      rules={{ required: 'Periodo obrigatório' }}
      label="Periodo"
    />
  );
}
