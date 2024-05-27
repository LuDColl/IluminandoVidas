import RegisterInputControllerComponent from './RegisterInputController.component';

export default function PeriodInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="period"
      rules={{ required: 'Periodo obrigatório' }}
      label="Periodo"
    />
  );
}
