import StudentInputControllerComponent from './StudentInputController.component';

export default function MomBusinessAddressInputComponent() {
  return (
    <StudentInputControllerComponent
      name="momBusinessAddress"
      rules={{ required: 'Endereço Comercial da Mãe obrigatório' }}
      label="Endereço Comercial"
    />
  );
}
