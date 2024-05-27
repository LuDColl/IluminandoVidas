import RegisterInputControllerComponent from './RegisterInputController.component';

export default function MomBusinessAddressInputComponent() {
  return (
    <RegisterInputControllerComponent
      name="momBusinessAddress"
      rules={{ required: 'Endereço Comercial da Mãe obrigatório' }}
      label="Endereço Comercial"
    />
  );
}
