import { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import { supabase } from 'utils/supabase';
import { primaryColor } from 'theme';
import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';
import { getImageMaxHeight } from 'utils/helpers/image.helper';
import SnackbarContextComponet from 'components/SnackbarContext.component';
import PasswordInputComponent from 'components/inputs/PasswordInput.component';
import TextInputComponent from 'components/inputs/TextInput.component';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [logoHeight, setLogoHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  useEffect(() => {
    const logo = require('../../../assets/images/logo.jpg');
    setLogo(logo);
    const height = getImageMaxHeight(logo);
    setLogoHeight(height);
  }, []);

  const login = async () => {
    setLoading(true);

    const cryptedPassword = await digestStringAsync(
      CryptoDigestAlgorithm.SHA512,
      password
    );

    const { data, error } = await supabase
      .from('tutor')
      .select('id_tutor, str_nome, bit_adm')
      .eq('str_usuario', username)
      .eq('str_senha', cryptedPassword);

    setLoading(false);
    if (error) return setError('Erro ao fazer login');

    if (!data || data.length == 0)
      return setError('Usuário ou senha incorretos');

    const { id_tutor, str_nome, bit_adm } = data[0];

    navigation.replace('Home', {
      id: id_tutor,
      name: str_nome,
      admin: bit_adm,
    });
  };

  return (
    <SnackbarContextComponet
      setMessage={setError}
      message={error}
      style={styles.container}
    >
      <View style={{ ...styles.image, backgroundColor: primaryColor }}>
        {logo && (
          <Image
            source={logo}
            style={{ ...styles.logo, height: logoHeight }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={{ ...styles.form, backgroundColor: theme.colors.onPrimary }}>
        <TextInputComponent
          label="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.gap} />
        <PasswordInputComponent
          label="Senha"
          password={password}
          setPassword={setPassword}
        />
        <View style={styles.gap} />
        <Button
          mode="contained"
          style={styles.button}
          onPress={login}
          loading={loading}
        >
          Entrar
        </Button>
      </View>
    </SnackbarContextComponet>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  image: { flex: 1, justifyContent: 'center' },
  logo: { width: '100%' },
  form: { flex: 1, padding: 16, justifyContent: 'center' },
  gap: { height: 16 },
  button: { minHeight: 40, justifyContent: 'center' },
});
