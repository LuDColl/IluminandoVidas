import StudentInputControllerComponent from './StudentInputController.component';

export default function SerieInputComponent() {
  return (
    <StudentInputControllerComponent
      name="serie"
      rules={{ required: 'Série obrigatória' }}
      label="Série"
    />
  );
}
