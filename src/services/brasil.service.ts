import CityResponse from 'models/city.response';
import StateResponse from 'models/state.response';
import brasilApi from 'utils/brasil.api';

export async function getStates(): Promise<StateResponse[]> {
  const { data } = await brasilApi.get<StateResponse[]>('/ibge/uf/v1');
  return data;
}

export async function getCities(uf: string): Promise<CityResponse[]> {
  const { data } = await brasilApi.get<CityResponse[]>(
    `/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`
  );

  return data;
}
