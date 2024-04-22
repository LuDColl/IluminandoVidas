import { ScrollView, View } from 'react-native';
import { Divider, ProgressBar } from 'react-native-paper';
import AppbarComponent from './components/Appbar.component';
import { bodyStyle } from './Register.styles';
import NumberInputComponent from './components/NumberInput.component';
import NameInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateInputComponent from './components/StartDate.component';
import BirthDateInputComponent from './components/BirthDateInput.component';
import BirthStateComponent from './components/BirthState.component';
import { useRegister } from './Register.hooks';
import { RegisterContext } from './Register.contexts';
import BirthCityComponent from './components/BirthCityInput.component';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';

type SearchScreenPropsType = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export default function RegisterScreen({ navigation }: SearchScreenPropsType) {
  const { control, submit, safeArea, setSafeArea, useUf, setValue, loading } =
    useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      {loading && <ProgressBar indeterminate={true} />}
      <View style={bodyStyle} onLayout={setSafeArea}>
        <RegisterContext.Provider value={{ safeArea, useUf, setValue }}>
          <ScrollView>
            <NumberInputComponent control={control} style={{ flex: 1 }} />
            <StartDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <NameInputComponent control={control} />
            <BirthDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <BirthStateComponent control={control} />
            <BirthCityComponent control={control} navigation={navigation} />
          </ScrollView>
          <ButtonComponent onPress={submit} style={{ marginTop: 'auto' }} />
        </RegisterContext.Provider>
      </View>
    </View>
  );
}
