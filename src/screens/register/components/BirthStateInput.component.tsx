import SelectInputComponent from './SelectInput.component';
import RegisterControlComponent from './RegisterController.component';
import StateResponse from 'models/state.response';

export default function BirthStateInputComponent({
  states,
}: {
  states: StateResponse[];
}) {
  const getSigla = (state: StateResponse) => state.sigla;
  const getNome = (state: StateResponse) => state.nome;

  return (
    <RegisterControlComponent
      name="birthUf"
      render={({ onChange }) => (
        <SelectInputComponent
          name="birthState"
          rules={{ required: 'Estado de Nascimento Obrigatório' }}
          items={states}
          getKey={getSigla}
          getText={getNome}
          label="Estado de nascimento"
          onChange={(item) => onChange(item.sigla)}
        />
      )}
    />
  );
}
