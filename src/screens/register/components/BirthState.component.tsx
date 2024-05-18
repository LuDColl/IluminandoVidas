import { RegisterControlType } from '../Register.types';
import { useContext, useEffect, useState } from 'react';
import SelectInputComponent from './SelectInput.component';
import { staticAxios } from '../Register.services';
import { RegisterContext } from '../Register.contexts';

interface StateResponse {
  id: number;
  sigla: string;
  nome: string;
}

const getStates = async () => {
  const response = await staticAxios.get<StateResponse[]>('/ibge/uf/v1');
  return response.data;
};

const useBirthState = () => {
  const { useUf } = useContext(RegisterContext);
  const [states, setStates] = useState<StateResponse[]>([]);

  useEffect(() => {
    getStates().then(setStates);
  }, []);

  const getSigla = (state: StateResponse) => state.sigla;
  const getNome = (state: StateResponse) => state.nome;
  const onChange = (state: StateResponse) => {
    useUf?.[1](state.sigla);
  };
  return { states, getSigla, getNome, onChange };
};

const BirthStateComponent = ({ control }: RegisterControlType) => {
  const { states, getSigla, getNome, onChange } = useBirthState();
  return (
    <SelectInputComponent<'birthState', StateResponse>
      name="birthState"
      rules={{ required: 'Estado de Nascimento Obrigatório' }}
      control={control}
      items={states}
      getKey={getSigla}
      getText={getNome}
      onChange={onChange}
      label="Estado de nascimento"
    />
  );
};

export default BirthStateComponent;
