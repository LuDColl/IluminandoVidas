import { LayoutRectangle, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, ProgressBar, Snackbar } from 'react-native-paper';
import AppbarComponent from './components/Appbar.component';
import NumberInputComponent from './components/NumberInput.component';
import NameInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateInputComponent from './components/StartDate.component';
import BirthDateInputComponent from './components/BirthDateInput.component';
import BirthStateInputComponent from './components/BirthStateInput.component';
import { RegisterContext } from './register.context';
import BirthCityComponent from './components/BirthCityInput.component';
import StreetInputComponent from './components/StreetInput.component';
import HouseNumberInput from './components/HouseNumberInput.component';
import SchoolInputComponent from './components/SchoolInput.component';
import SerieInputComponent from './components/SerieInput.component';
import PeriodInputComponent from './components/PeriodInput.component';
import MomInputComponent from './components/MomInput.component';
import MomBusinessAddressInputComponent from './components/MomBusinessAddress.component';
import DadInputComponent from './components/DadInput.component';
import DadBusinessAddressInputComponent from './components/DadBusinessAddress.component';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { staticAxios } from './register.services';
import RegisterForm from './models/register.form';
import { supabase } from 'utils/supabase';
import { getAge } from 'utils/helpers/date.helper';
import GenderInputComponent from './components/GenderInput.component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';

export default function RegisterScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Register'>>();

  const [safeArea, setSafeArea] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const form = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      number: '',
      startDate: '',
      birthCity: '',
      birthDate: '',
      birthState: '',
      street: '',
      houseNumber: '',
      district: '',
      dad: '',
      dadBusinnessAddress: '',
      dadNumber: '',
      mom: '',
      momBusinessAddress: '',
      momNumber: '',
      period: '',
      school: '',
      serie: '',
      birthUf: '',
    },
  });

  useEffect(() => {
    staticAxios.interceptors.request.use((config) => {
      setLoading(true);
      return config;
    });

    staticAxios.interceptors.response.use((config) => {
      setLoading(false);
      return config;
    });
  }, []);

  const submit = form.handleSubmit(async (data) => {
    const [day, month, year] = data.birthDate.split('/');
    const birthDate = new Date(+day, +month - 1, +year);
    const age = getAge(birthDate);

    const { data: response, error } = await supabase
      .from('aluno')
      .insert({
        str_nomealuno: data.name,
        dte_nascimento: birthDate.toISOString(),
        str_natestado: data.birthUf,
        str_natcidade: data.birthCity,
        int_idade: age,
        str_sexo: data.genderAcronym,
        str_endereco: data.street,
        int_numeroend: +data.houseNumber ?? 0,
        str_bairro: data.district,
        str_escola: data.school,
        str_serie: data.serie,
        str_periodo: data.period,
        str_nomemae: data.mom,
        str_enderecocomercialmae: data.momBusinessAddress,
        str_nomepai: data.dad,
        str_enderecocomercialpai: data.dadBusinnessAddress,
        bit_ativo: true,
      })
      .select('id_aluno');

    if (error) return setError('Erro ao cadastrar aluno');

    navigation.pop();
  });

  return (
    <View style={styles.container}>
      <AppbarComponent />
      {loading && <ProgressBar indeterminate={true} />}
      <RegisterContext.Provider value={{ safeArea }}>
        <View
          style={styles.body}
          onLayout={({ nativeEvent }) => setSafeArea(nativeEvent.layout)}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <FormProvider {...form}>
              <NumberInputComponent style={{ flex: 1 }} />
              <StartDateInputComponent />
              <Divider style={styles.divider} />
              <NameInputComponent />
              <GenderInputComponent />
              <BirthDateInputComponent />
              <Divider style={styles.divider} />
              <BirthStateInputComponent />
              <BirthCityComponent />
              <Divider style={styles.divider} />
              <StreetInputComponent />
              <HouseNumberInput />
              <Divider style={styles.divider} />
              <SchoolInputComponent />
              <SerieInputComponent />
              <PeriodInputComponent />
              <Divider style={styles.divider} />
              <MomInputComponent />
              {/* <MomNumberInputComponent /> */}
              <MomBusinessAddressInputComponent />
              <Divider style={styles.divider} />
              <DadInputComponent />
              {/* <DadNumberInputComponent /> */}
              <DadBusinessAddressInputComponent />
            </FormProvider>
          </ScrollView>
          <ButtonComponent onPress={submit} style={styles.button} />
        </View>
      </RegisterContext.Provider>
      <Snackbar
        visible={!!error}
        onDismiss={() => setError(null)}
        icon="close"
        onIconPress={() => setError(null)}
      >
        {error}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  divider: { marginBottom: 16 },
  button: { marginTop: 16 },
});
