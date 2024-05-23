import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { TextInput, Button, Icon } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarComponent from 'components/TabBar.component';
import HomeScreen from '@screens/home/Home.screen';
import { supabase } from './supabase';

// Importe a imagem aqui
const Logo = require('../../public/img/logOng.png');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    console.log('Tentativa de login...');
    try {
      const { data: tutor, error } = await supabase
        .from('tutor')
        .select('*')
        .eq('str_usuario', username)
        .eq('str_senha', password);

      console.log('data:', tutor);

      if (error) {
        Alert.alert('Erro', 'Erro ao fazer login');
        console.error(error);
        return;
      }

      if (tutor && tutor.length > 0) {
        console.log('Login realizado com sucesso');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
        setPassword('');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer login');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TextInput
        label="Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 10,
    width: '80%',
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  logo: {
    width: 300, // ajusta a largura da logo
    height: 150, // ajusta a altura da logo
    marginBottom: 30,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default LoginScreen;
