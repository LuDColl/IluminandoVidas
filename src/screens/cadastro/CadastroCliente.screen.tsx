import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import CryptoJS from 'crypto-js';

// Função para criptografar uma string usando SHA-256
const encryptString = (text: string): string => {
  return CryptoJS.SHA256(text).toString();
};

// Função para descriptografar uma string usando SHA-256
// O SHA-256 é um algoritmo de hash unidirecional, então não é possível descriptografar diretamente.
// Mas você pode comparar hashes.
const decryptString = (hashedText: string, textToCompare: string): boolean => {
  const hashToCompare = CryptoJS.SHA256(textToCompare).toString();
  return hashedText === hashToCompare;
};

// Exemplo de uso
const originalText = 'Hello, world!';
const encryptedText = encryptString(originalText);
console.log('Texto criptografado:', encryptedText);

// Verificação de senha, por exemplo
const passwordEnteredByUser = 'Hello, world!'; // Senha digitada pelo usuário
const isPasswordCorrect = decryptString(encryptedText, passwordEnteredByUser);
console.log('Senha correta:', isPasswordCorrect);


export default function CustomerRegistrationScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');

  const handleRegistration = () => {
    validadorDeSenha()
    // Aqui você pode adicionar lógica para processar o registro do cliente
    // Por exemplo, enviar os dados para um servidor ou armazená-los localmente
    console.log('Login:', login);
    console.log('Senha:', senha);
    console.log('Confirme Senha:', confirmeSenha);
  };
  
  const validadorDeSenha = () => {
    if(senha != confirmeSenha){
        showAlert()
        setSenha("");
        setConfirmeSenha("");
    }
  }
  
  const showAlert = () => {
      Alert.alert(
        'Senha não compatível',
        'Verifique se as senhas são iguais.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressionado') },
        ],
        { cancelable: false }
      );     
    };

  
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro de Cliente</Text>
      <TextInput
        placeholder="Login"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        placeholder="Senha"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        value={senha}
        secureTextEntry={true}
        onChangeText={setSenha}
        keyboardType="password"
      />
      <TextInput
              placeholder="Confirme Senha"
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
              secureTextEntry={true}
              value={confirmeSenha}
              onChangeText={setConfirmeSenha}
              keyboardType="password"
            />
      <Button
        title="Cadastrar"
        onPress={handleRegistration}
      />
    </View>
  );
}