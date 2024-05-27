import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import {
  Avatar,
  Card,
  Divider,
  IconButton,
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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  useEffect(() => {
    const logo = require('../../../assets/images/logo.jpg');
    setLogo(logo);
    const logoHeight = getImageMaxHeight(logo);
    setLogoHeight(logoHeight / 2);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: primaryColor }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            paddingHorizontal: 16,
          }}
        >
          <Card>
            <Card.Title
              style={{ padding: 16 }}
              title="Olá, Fernanda!"
              subtitle="Seja bem-vinda!"
              right={() => <Avatar.Icon icon="account" />}
            />
          </Card>

          {logo && (
            <Image
              source={logo}
              style={{ width: '100%', height: logoHeight }}
              resizeMode="cover"
            />
          )}
        </View>
        <Divider
          style={{ marginTop: 16, marginBottom: 24, marginHorizontal: 16 }}
        />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <IconButton
              mode="contained"
              icon="account-group"
              onPress={() => {}}
              size={60}
              style={{ borderRadius: 8 }}
              containerColor={colors.background}
            />
            <IconButton
              mode="contained"
              icon="card-account-details"
              size={60}
              style={{ borderRadius: 8 }}
              containerColor={colors.background}
            />
            <IconButton
              mode="contained"
              icon="information-variant"
              size={60}
              style={{ borderRadius: 8 }}
              containerColor={colors.background}
            />
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
