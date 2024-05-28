import StudentInputControllerComponent from './StudentInputController.component';

export default function MomNumberInputComponent() {
  return (
    <StudentInputControllerComponent
      name="momNumber"
      rules={{ required: 'Número da Mãe obrigatório' }}
      label="Número"
    />
  );
}
