import InputControlComponent from './InputControl.component';

export default function SerieInputComponent() {
  return (
    <InputControlComponent
      name="serie"
      rules={{ required: 'Série obrigatória' }}
      label="Série"
    />
  );
}
