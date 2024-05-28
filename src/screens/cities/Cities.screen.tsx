import { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import SearchComponent from 'components/Search.component';
import CityResponse from 'models/city.response';
import { getCities } from 'services/brasil.service';

export default function CitiesScreen() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Cities'>>();
  const [cities, setCities] = useState<CityResponse[] | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Cities'>>();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const cities = await getCities(params.uf);
    setCities(cities);
  };

  return (
    <SearchComponent
      items={cities}
      getKey={({ codigo_ibge }) => codigo_ibge.toString()}
      getText={({ nome }) => nome}
      noData="Nenhuma cidade encontrada"
      onPress={({ nome }) => navigation.navigate('Student', { city: nome })}
      onRefresh={getStudents}
      placeholder="Digite o nome da cidade"
    />
  );
}
