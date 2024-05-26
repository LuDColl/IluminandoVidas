import { useEffect, useState } from 'react';
import SelectInputComponent from './SelectInput.component';
import { staticAxios } from '../register.services';
import ControlComponent from './Control.component';

interface StateResponse {
  id: number;
  sigla: string;
  nome: string;
}

export default function BirthStateInputComponent() {
  const [states, setStates] = useState<StateResponse[]>([]);

  useEffect(() => {
    staticAxios
      .get<StateResponse[]>('/ibge/uf/v1')
      .then((value) => setStates(value.data));
  }, []);

  const getSigla = (state: StateResponse) => state.sigla;
  const getNome = (state: StateResponse) => state.nome;

  return (
    <ControlComponent
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
