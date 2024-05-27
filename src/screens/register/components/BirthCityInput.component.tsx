import { useEffect, useState } from 'react';
import { staticAxios } from '../register.services';
import { TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import TextInputComponent from 'components/TextInput.component';
import RegisterControlComponent from './RegisterController.component';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import RegisterForm from '../models/register.form';

interface CityResponse {
  nome: string;
  codigo_ibge: number;
}

export default function BirthCityComponent() {
  const route = useRoute<RouteProp<RootStackParamList, 'Register'>>();
  const [cities, setCities] = useState<CityResponse[] | null>([]);
  const { watch } = useFormContext<RegisterForm>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Register'>>();

  useEffect(() => {
    const subscription = watch(async ({ birthUf }, { name }) => {
      if (name != 'birthUf') return;
      if (!birthUf) return;

      const value = await staticAxios.get<CityResponse[]>(
        `/ibge/municipios/v1/${birthUf}?providers=dados-abertos-br,gov,wikipedia`
      );

      setCities(value.data);
    });

    return subscription.unsubscribe;
  }, []);

  const disabled = cities === null || cities.length === 0;

  return (
    <RegisterControlComponent
      name="birthCity"
      rules={{ required: 'Cidade de Nascimento Obrigatória' }}
      render={({ onChange, value, hasError }) => {
        useEffect(() => {
          onChange(route.params?.city ?? '');
        }, [route.params?.city]);

        return (
          <TextInputComponent
            label="Cidade de nascimento"
            editable={false}
            disabled={disabled}
            value={value}
            error={hasError}
            right={
              <TextInput.Icon
                icon="magnify"
                onPress={() => {
                  if (disabled) return;
                  navigation.navigate('Search', {
                    placeholder: 'Cidade de nascimento',
                    items: cities!.map((city) => ({
                      key: city.codigo_ibge,
                      title: city.nome,
                    })),
                  });
                }}
              />
            }
          />
        );
      }}
    />
  );
}
