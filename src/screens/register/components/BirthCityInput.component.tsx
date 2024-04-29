import { useContext, useEffect, useState } from 'react';
import { staticAxios } from '../Register.services';
import { RegisterControlType } from '../Register.types';
import SelectInputComponent from './SelectInput.component';
import { RegisterContext } from '../Register.contexts';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import TextInputComponent from 'components/TextInput.component';
import ControlComponent from './Control.component';

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
  const disabled = cities === null || cities.length === 0;

  return (
    <ControlComponent
      control={control}
      name="birthCity"
      render={({ onChange }) => (
        <TextInputComponent
          label="Cidade de nascimento"
          editable={false}
          disabled={disabled}
          right={
            <TextInput.Icon
              icon="magnify"
              onPress={() =>
                navigation.navigate('Search', {
                  placeholder: 'Cidade de nascimento',
                  setItem: (item) => onChange(item.title),
                  items: cities!.map((city) => ({
                    key: city.codigo_ibge,
                    title: city.nome,
                  })),
                })
              }
            />
          }
        />
      )}
    />
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
