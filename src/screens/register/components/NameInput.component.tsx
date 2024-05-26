import InputControlComponent from './InputControl.component';

export default function NameInputComponent() {
  return (
    <InputControlComponent
      name="name"
      rules={{ required: 'Nome obrigatório' }}
      label="Nome"
    />
  );
}
