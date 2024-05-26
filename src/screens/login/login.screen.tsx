import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { TextInput, Button, useTheme, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import { supabase } from 'utils/supabase';
import { primaryColor } from 'theme';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  useEffect(() => {
    const logoUri = '../../../assets/images/logo.jpg';
    const logo = require(logoUri);
    setLogo(logo);
    const imageSource = Image.resolveAssetSource(logo);
    const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;
    const ratio = imageSource.width / imageSource.height;
    setImageHeight(screenWidth * ratio);
  }, []);

  const login = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('tutor')
      .select('*')
      .eq('str_usuario', username)
      .eq('str_senha', password);

    setLoading(false);
    if (error) return setError('Erro ao fazer login');

    if (!data || data.length == 0)
      return setError('Usuário ou senha incorretos');

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.image, backgroundColor: primaryColor }}>
        {logo && (
          <Image
            source={logo}
            style={{ ...styles.logo, height: imageHeight }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={{ ...styles.form, backgroundColor: theme.colors.onPrimary }}>
        <TextInput
          mode="outlined"
          label="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.gap} />
        <TextInput
          mode="outlined"
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color={theme.colors.primary}
            />
          }
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
  container: { flex: 1, flexDirection: 'column' },
  image: { flex: 1, justifyContent: 'center' },
  logo: { width: '100%' },
  form: { flex: 1, padding: 16, justifyContent: 'center' },
  gap: { height: 16 },
  button: { minHeight: 40, justifyContent: 'center' },
});
