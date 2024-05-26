import InputControlComponent from './InputControl.component';

export default function DadBusinessAddressInputComponent() {
  return (
    <InputControlComponent
      name="dadBusinnessAddress"
      rules={{ required: 'Número Comercial do Pai obrigatório' }}
      label="Número Comercial"
    />
  );
}
