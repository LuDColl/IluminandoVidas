import RegisterInputControllerComponent from './RegisterInputController.component';

export default function DadBusinessAddressInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="dadBusinnessAddress"
      rules={{ required: 'Número Comercial do Pai obrigatório' }}
      label="Número Comercial"
    />
  );
}
