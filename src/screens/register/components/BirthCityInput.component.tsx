import { useContext, useEffect, useState } from 'react';
import { staticAxios } from '../Register.services';
import { RegisterControlType } from '../Register.types';
import SelectInputComponent from './SelectInput.component';
import { RegisterContext } from '../Register.contexts';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';

interface CityResponse {
  nome: string;
  codigo_ibge: number;
}

const getCities = async (uf: string) => {
  const response = await staticAxios.get<CityResponse[]>(
    `/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`
  );
  return response.data;
};

const useBirthCity = () => {
  const { useUf, setValue } = useContext(RegisterContext);
  const uf = useUf?.[0];
  const [cities, setCities] = useState<CityResponse[] | null>([]);

  useEffect(() => {
    if (!uf) return;
    if (setValue) setValue('birthCity', '');
    setCities(null);
    getCities(uf).then(setCities);
  }, [uf]);

  const getCod = (city: CityResponse) => city.codigo_ibge;
  const getNome = (city: CityResponse) => city.nome;

  return { cities, getCod, getNome };
};

const BirthCityComponent = ({
  control,
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Register',
    undefined
  >;
} & RegisterControlType) => {
  const { cities, getCod, getNome } = useBirthCity();

  return (
    <Button
      onPress={() => {
        navigation.navigate('Search', {
          items: cities!.map((city) => ({
            key: city.codigo_ibge,
            title: city.nome,
          })),
        });
      }}
    >
      Teste
    </Button>
  );
  return (
    <SelectInputComponent<'birthCity', CityResponse>
      name="birthCity"
      control={control}
      items={cities}
      getKey={getCod}
      getText={getNome}
      label="Cidade de nascimento"
    />
  );
};

export default BirthCityComponent;
