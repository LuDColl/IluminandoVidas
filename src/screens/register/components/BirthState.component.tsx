import { RegisterControlType } from '../Register.types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectInputComponent from './SelectInput.component';

const instance = axios.create({ baseURL: 'https://brasilapi.com.br/api' });

interface StateResponse {
  id: number;
  sigla: string;
  nome: string;
}

const getStates = async () => {
  const response = await instance.get<StateResponse[]>('/ibge/uf/v1');
  return response.data;
};

const useBirthState = () => {
  const [states, setStates] = useState<StateResponse[]>([]);

  useEffect(() => {
    getStates().then(setStates);
  }, []);

  const getSigla = (state: StateResponse) => state.sigla;
  const getNome = (state: StateResponse) => state.nome;

  return { states, getSigla, getNome };
};

const BirthStateComponent = ({ control }: RegisterControlType) => {
  const { states, getSigla, getNome } = useBirthState();
  return (
    <SelectInputComponent<'birthState', StateResponse>
      name="birthState"
      control={control}
      values={states}
      getKey={getSigla}
      getText={getNome}
      label="Estado de nascimento"
    />
  );
};

export default BirthStateComponent;
