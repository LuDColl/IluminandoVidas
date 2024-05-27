import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../img/logohome.svg';
import Iline from '../img/line.svg';
import Wave from '../img/vector.svg';
import { Button } from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Olá, Fernanda!</Text>
        <Text style={styles.welcomeText}>Seja bem-vinda!</Text>
      </View>

      <View style={styles.logoContainer}>
        <Logo width={375} height={436} />
      </View>

      <Iline style={styles.line} width={350} height={200} />

      <View style={styles.menuContainer}>
        <Button
          onPress={() => navigation.navigate('Students')}
          title="Alunos"
        />

        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Register')}
        />

        <Button
          title="Admin"
          onPress={() => navigation.navigate('UserRegister')}
        />
      </View>

      <Wave style={styles.waveform} width={450} height={250} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 16,
    backgroundColor: '#FFA500',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 16,
  },
  logoContainer: {
    right: 16,
    bottom: 110,
  },
  line: {
    bottom: 320,
  },
  waveform: {
    position: 'absolute',
    bottom: -25,
    left: 0,
  },
  menuContainer: {
    bottom: 380,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
  },
});
