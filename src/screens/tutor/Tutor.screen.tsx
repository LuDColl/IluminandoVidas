import { FormProvider, useForm } from 'react-hook-form';
import TutorForm from './models/tutor.form';
import TutorInputControllerComponent from './components/TutorInputController.component';
import { Button, Divider, ProgressBar, Switch, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import TutorAppbarComponent from './components/TutorAppBar.component';
import { ScrollView, StyleSheet, View } from 'react-native';
import ControllerComponent from 'components/Controller.component';
import { supabase } from 'utils/supabase';
import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import SnackbarContextComponet from 'components/SnackbarContext.component';
import TutorPasswordInputControllerComponent from './components/TutorPasswordInputController.conponent';
import {
  getDddAndPhone,
  getPhoneAndMaskedPhone,
} from 'utils/helpers/phone.helper';
import PhoneInputComponent from './components/PhoneInput.component';

export default function TutorScreen() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Tutor'>>();
  const hasId = !!params?.id;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Tutor'>>();

  const form = useForm<TutorForm>({
    defaultValues: {
      confirmPassword: '',
      password: '',
      user: '',
      address: '',
      admin: false,
      maskedPhone: '',
      name: '',
      phone: '',
    },
  });

  useEffect(() => {
    getTutor();

    const subscription = form.watch(({ confirmPassword }, { name }) => {
      if (!form.formState.isSubmitted) return;
      if (name != 'password') return;

      form.setValue('confirmPassword', confirmPassword ?? '', {
        shouldValidate: true,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const getTutor = async () => {
    if (!hasId) return;

    setLoading(true);

    const { data, error } = await supabase
      .from('tutor')
      .select(
        'str_nome, int_ddd, int_telefone, str_endereco, str_usuario, bit_adm'
      );

    setLoading(false);
    if (error) return setError('Erro ao carregar tutor');

    if (!data || data.length === 0) return;

    const { setValue } = form;
    const [tutor] = data;
    setValue('name', tutor.str_nome);
    setValue('address', tutor.str_endereco);
    setValue('user', tutor.str_usuario);
    setValue('admin', tutor.bit_adm);

    const [phone, maskedPhone] = getPhoneAndMaskedPhone(
      tutor.int_ddd,
      tutor.int_telefone
    );

    setValue('phone', phone);
    setValue('maskedPhone', maskedPhone);
  };

  const submit = form.handleSubmit(
    async ({ name, phone, address, user, password, admin }) => {
      setLoading(true);
      const [ddd, phoneNumber] = getDddAndPhone(phone);

      const encryptedPassword = await digestStringAsync(
        CryptoDigestAlgorithm.SHA512,
        password
      );

      const { error } = await supabase.from('tutor').insert({
        str_nome: name,
        int_ddd: ddd,
        int_telefone: phoneNumber,
        str_endereco: address,
        str_usuario: user,
        str_senha: encryptedPassword,
        bit_ativo: true,
        bit_adm: admin,
      });

      setLoading(false);
      if (error) return setError('Erro ao cadastrar tutor');
      navigation.pop();
    }
  );

  return (
    <SnackbarContextComponet
      setMessage={setError}
      message={error}
      style={styles.container}
    >
      <TutorAppbarComponent />
      {loading && <ProgressBar indeterminate={true} />}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormProvider {...form}>
            <TutorInputControllerComponent
              name="name"
              label="Nome"
              rules={{ required: 'Nome obrigatório' }}
            />
            <PhoneInputComponent />
            <TutorInputControllerComponent
              name="address"
              label="Endereço"
              rules={{ required: 'Endereço obrigatório' }}
            />
            <Divider style={styles.divider} />
            <TutorInputControllerComponent
              name="user"
              label="Usuário"
              rules={{ required: 'Usuário obrigatório' }}
            />
            {!hasId && (
              <>
                <TutorPasswordInputControllerComponent
                  name="password"
                  label="Senha"
                  rules={{ required: 'Senha Obrigatória' }}
                />
                <TutorPasswordInputControllerComponent
                  name="confirmPassword"
                  label="Confirmar Senha"
                  rules={{
                    required: 'Usuário obrigatório',
                    validate: (confirmPassword, { password }) => {
                      if (confirmPassword != password)
                        return 'Senhas devem ser iguais';
                      return true;
                    },
                  }}
                />
              </>
            )}
            <ControllerComponent
              control={form.control}
              name="admin"
              render={({ value, onChange }) => (
                <View style={styles.switch}>
                  <Text variant="bodyLarge">Administrador:</Text>
                  <Switch value={value} onValueChange={onChange} />
                </View>
              )}
            />
          </FormProvider>
        </ScrollView>
        {!hasId && (
          <Button
            mode="elevated"
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={submit}
            loading={loading}
          >
            Cadastrar
          </Button>
        )}
      </View>
    </SnackbarContextComponet>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  button: { marginTop: 16 },
  buttonContent: { height: 48 },
  divider: { marginBottom: 16 },
  switch: { flexDirection: 'row', alignItems: 'center' },
});
