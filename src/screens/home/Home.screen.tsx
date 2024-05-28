import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Text,
  useTheme,
} from 'react-native-paper';
import { primaryColor } from 'theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getImageMaxHeight } from 'utils/helpers/image.helper';
import Wave from '../../../assets/images/wave.svg';

export default function HomeScreen() {
  const [logo, setLogo] = useState<any>(null);
  const [logoHeight, setLogoHeight] = useState(0);
  const { colors } = useTheme();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  useEffect(() => {
    const logo = require('../../../assets/images/logo.jpg');
    setLogo(logo);
    const logoHeight = getImageMaxHeight(logo);
    setLogoHeight(logoHeight / 2);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.top}>
          <Card>
            <Card.Title
              style={styles.card}
              title={`Olá, ${params.name}!`}
              subtitle="Seja bem-vindo!"
              right={() => <Avatar.Icon icon="account" />}
            />
          </Card>

          {logo && (
            <Image
              source={logo}
              style={{ ...styles.image, height: logoHeight }}
              resizeMode="cover"
            />
          )}
        </View>
        <Divider style={styles.divider} />
        <View style={styles.bottom}>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <IconButton
                mode="contained"
                icon="account-group"
                onPress={() => navigation.push('Students')}
                size={60}
                style={styles.icon}
                containerColor={colors.background}
              />
              <Text style={{ color: colors.onPrimary }}>Alunos</Text>
            </View>
            <View style={styles.button}>
              <IconButton
                mode="contained"
                icon="card-account-details"
                size={60}
                onPress={() => navigation.push('Student')}
                style={styles.icon}
                containerColor={colors.background}
              />
              <Text style={{ color: colors.onPrimary }}>Cadastro</Text>
            </View>
            {params.admin && (
              <View style={styles.button}>
                <IconButton
                  mode="contained"
                  icon="information-variant"
                  onPress={() => navigation.push('Tutors')}
                  size={60}
                  style={styles.icon}
                  containerColor={colors.background}
                />
                <Text style={{ color: colors.onPrimary }}>Adminstração</Text>
              </View>
            )}
          </View>
          <Wave
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').width}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: primaryColor },
  safeArea: { flex: 1 },
  top: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  card: { padding: 16 },
  image: { width: '100%' },
  divider: { marginTop: 16, marginBottom: 24, marginHorizontal: 16 },
  bottom: { flex: 1, justifyContent: 'space-between' },
  buttons: { flexDirection: 'row', justifyContent: 'space-evenly' },
  button: { alignItems: 'center' },
  icon: { borderRadius: 8 },
});
