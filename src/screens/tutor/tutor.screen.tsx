import { FormProvider, useForm } from 'react-hook-form';
import TutorForm from './models/tutor.form';
import TutorInputControllerComponent from './components/TutorInputController.component';
import { Button, Divider, Switch, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import TutorAppbarComponent from './components/TutorAppBar.component';
import { ScrollView, StyleSheet, View } from 'react-native';
import ControllerComponent from 'components/Controller.component';
import MaskInput, { Masks } from 'react-native-mask-input';
import { supabase } from 'utils/supabase';
import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import SnackbarContextComponet from 'components/SnackbarContext.component';

export default function TutorScreen() {
  const [error, setError] = useState<string | null>(null);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'Tutor'>
    >();

  const form = useForm<TutorForm>({
    defaultValues: { confirmPassword: '', password: '', user: '' },
  });

  useEffect(() => {
    const subscription = form.watch(({ confirmPassword }, { name }) => {
      if (!form.formState.isSubmitted) return;
      if (name != 'password') return;

      form.setValue('confirmPassword', confirmPassword ?? '', {
        shouldValidate: true,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const submit = form.handleSubmit(
    async ({ name, phone, address, user, password, admin }) => {
      const ddd = phone.substring(0, 2);
      phone = phone.substring(2);

      const encryptedPassword = await digestStringAsync(
        CryptoDigestAlgorithm.SHA512,
        password
      );

      const { error } = await supabase.from('tutor').insert({
        str_nome: name,
        int_ddd: +ddd,
        int_telefone: +phone,
        str_endereco: address,
        str_usuario: user,
        str_senha: encryptedPassword,
        bit_ativo: true,
        bit_adm: admin,
      });

      if (error) return setError('Erro ao cadastrar tutor');
      navigation.pop();
    }
  );

  return (
    <SnackbarContextComponet setMessage={setError} message={error}>
      <TutorAppbarComponent />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormProvider {...form}>
            <TutorInputControllerComponent
              name="name"
              label="Nome"
              rules={{ required: 'Nome obrigatório' }}
            />
            <TutorInputControllerComponent
              name="maskedPhone"
              label="Telefone"
              rules={{
                required: 'Telefone obrigatório',
                minLength: { value: 15, message: 'Telefone Inválido' },
              }}
              render={(props) => (
                <MaskInput
                  {...props}
                  mask={Masks.BRL_PHONE}
                  onChangeText={(masked, unmasked) => {
                    if (!props?.onChangeText) return;
                    props.onChangeText(masked);
                    form.setValue('phone', unmasked);
                  }}
                />
              )}
            />
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
            <TutorInputControllerComponent
              name="password"
              label="Senha"
              keyboardType="visible-password"
              secureTextEntry={true}
              rules={{ required: 'Senha Obrigatória' }}
            />
            <TutorInputControllerComponent
              name="confirmPassword"
              label="Confirmar Senha"
              keyboardType="visible-password"
              secureTextEntry={true}
              rules={{
                required: 'Usuário obrigatório',
                validate: (confirmPassword, { password }) => {
                  if (confirmPassword != password)
                    return 'Senhas devem ser iguais';
                  return true;
                },
              }}
            />
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
        <Button
          mode="elevated"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={submit}
        >
          Cadastrar
        </Button>
      </View>
    </SnackbarContextComponet>
  );
}
const styles = StyleSheet.create({
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
