import { TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import TextInputComponent from 'components/TextInput.component';
import RegisterControlComponent from './RegisterController.component';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import RegisterForm from '../models/register.form';
import { useEffect } from 'react';

export default function BirthCityComponent() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Register'>>();
  const { watch } = useFormContext<RegisterForm>();
  const uf = watch('birthUf');
  const disabled = !uf;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Register'>>();

  return (
    <RegisterControlComponent
      name="birthCity"
      rules={{ required: 'Cidade de Nascimento Obrigatória' }}
      render={({ onChange, value, hasError }) => {
        useEffect(() => {
          onChange(params?.city ?? '');
        }, [params?.city]);
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
                  navigation.push('Cities', { uf: uf });
                }}
              />
            }
          />
        );
      }}
    />
  );
}
