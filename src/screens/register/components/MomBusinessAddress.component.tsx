import InputControlComponent from './InputControl.component';

export default function MomBusinessAddressInputComponent() {
  return (
    <InputControlComponent
      name="momBusinessAddress"
      rules={{ required: 'Endereço Comercial da Mãe obrigatório' }}
      label="Endereço Comercial"
    />
  );
}
