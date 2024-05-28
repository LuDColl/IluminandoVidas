import StudentInputControllerComponent from './StudentInputController.component';

export default function DadBusinessAddressInputComponent() {
  return (
    <StudentInputControllerComponent
      name="dadBusinnessAddress"
      rules={{ required: 'Número Comercial do Pai obrigatório' }}
      label="Número Comercial"
    />
  );
}
