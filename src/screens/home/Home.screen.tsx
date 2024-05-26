import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../img/logohome.svg";
import Iline from "../img/line.svg";
import Wave from "../img/vector.svg";
import { Button } from 'components/Button';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Olá, Fernanda!</Text>
        <Text style={styles.welcomeText}>Seja bem-vinda!</Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo width={375} height={436} />
      </View>

      {/* Linha em baixo da logo */}
      <Iline style={styles.line} width={350} height={200} />



      {/* Botão Alunos */}
      <View style={styles.menuContainer}>
        <Button
          onPress={() => navigation.navigate('Alunos')}
          title='Alunos'
        />

        <Button
          title='Cadastro'
          onPress={() => navigation.navigate('Cadastro')}
        />

        <Button
          title='Admin'
          onPress={() => navigation.navigate('Admin')}
        />

      </View >

      {/* Wave */}
      < Wave style={styles.waveform} width={450} height={250} />

    </View >
  );
};

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

export default HomeScreen;
