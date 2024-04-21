import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
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

export default function RegisterScreen() {
  const { control, submit, safeArea, setSafeArea, useUf, setValue } =
    useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
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
            <BirthCityComponent control={control} />
          </ScrollView>
          <ButtonComponent onPress={submit} style={{ marginTop: 'auto' }} />
        </RegisterContext.Provider>
      </View>
    </View>
  );
}
