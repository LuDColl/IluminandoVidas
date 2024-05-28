import { LayoutRectangle, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, ProgressBar } from 'react-native-paper';
import StudentAppbarComponent from './components/StudentAppbar.component';
import NumberInputComponent from './components/NumberInput.component';
import NameInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateInputComponent from './components/StartDate.component';
import BirthDateInputComponent from './components/BirthDateInput.component';
import BirthStateInputComponent from './components/BirthStateInput.component';
import { RegisterContext } from './student.context';
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
import StudentForm from './models/student.form';
import { supabase } from 'utils/supabase';
import { getAge } from 'utils/helpers/date.helper';
import GenderInputComponent from './components/GenderInput.component';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import StateResponse from '../../models/state.response';
import GenderModel from './models/gender.model';
import SnackbarContextComponet from 'components/SnackbarContext.component';
import brasilApi from 'utils/brasil.api';
import { getStates } from 'services/brasil.service';

const genders: GenderModel[] = [
  { name: 'Masculino', acronym: 'M' },
  { name: 'Feminino', acronym: 'F' },
];

export default function RegisterScreen() {
  const [states, setStates] = useState<StateResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Student'>>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Student'>>();

  const [safeArea, setSafeArea] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const form = useForm<StudentForm>({
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
      gender: '',
      genderAcronym: '',
    },
  });

  useEffect(() => {
    const { interceptors } = brasilApi;
    const { request, response } = interceptors;

    request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        setError('Erro ao carregar os dados');
        return Promise.reject(error);
      }
    );

    response.use(
      (config) => {
        setLoading(false);
        return config;
      },
      (error) => {
        setLoading(false);
        setError('Erro ao carregar os dados');
        return Promise.reject(error);
      }
    );

    initData();

    return () => {
      request.clear();
      response.clear();
    };
  }, []);

  const initData = async () => {
    const states = await getStates();
    setStates(states);
    if (!params?.id) return;

    setLoading(true);

    const { error, data } = await supabase
      .from('aluno')
      .select(
        'str_nomealuno, dte_nascimento, str_sexo, str_endereco, int_numeroend, str_bairro, str_natestado, str_natcidade, str_escola, str_serie, str_periodo, str_nomemae, str_enderecocomercialmae, str_nomepai, str_enderecocomercialpai, bit_ativo'
      )
      .eq('id_aluno', params?.id);

    setLoading(false);
    if (error) return setError('Erro ao carregar os dados');

    if (!data || data.length == 0) return setError('Erro ao carregar os dados');

    const [student] = data;
    const { str_natestado, str_sexo } = student;
    form.setValue('name', student.str_nomealuno);
    form.setValue('genderAcronym', str_sexo);
    form.setValue('street', student.str_endereco);
    form.setValue('houseNumber', `${student.int_numeroend}`);
    form.setValue('district', student.str_bairro);
    form.setValue('birthUf', str_natestado ?? '');
    form.setValue('birthCity', student.str_natcidade ?? '');
    form.setValue('school', student.str_escola ?? '');
    form.setValue('serie', student.str_serie ?? '');
    form.setValue('period', student.str_periodo ?? '');
    form.setValue('mom', student.str_nomemae ?? '');
    form.setValue('dad', student.str_nomepai ?? '');
    form.setValue('momBusinessAddress', student.str_enderecocomercialmae ?? '');

    const gender = genders.find((gender) => (gender.acronym = str_sexo));
    form.setValue('gender', gender?.name ?? '');

    const dte_nascimento: string = student.dte_nascimento;
    const [year, month, day] = dte_nascimento.split('-');
    const birthDate = `${day}/${month}/${year}`;
    form.setValue('birthDate', birthDate);

    form.setValue(
      'dadBusinnessAddress',
      student.str_enderecocomercialpai ?? ''
    );

    if (str_natestado) {
      const state = states.find((state) => state.sigla === str_natestado);
      form.setValue('birthState', state?.nome ?? '');
    }
  };

  const submit = form.handleSubmit(async (data) => {
    const [day, month, year] = data.birthDate.split('/');
    const birthDate = new Date(+day, +month - 1, +year);
    const age = getAge(birthDate);

    const { error } = await supabase
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
    <SnackbarContextComponet
      setMessage={setError}
      message={error}
      style={styles.container}
    >
      <StudentAppbarComponent />
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
              <GenderInputComponent genders={genders} />
              <BirthDateInputComponent />
              <Divider style={styles.divider} />
              <BirthStateInputComponent states={states} />
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
    </SnackbarContextComponet>
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
