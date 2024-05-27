import RegisterInputControllerComponent from './RegisterInputController.component';

export default function SerieInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="serie"
      rules={{ required: 'Série obrigatória' }}
      label="Série"
    />
  );
}
