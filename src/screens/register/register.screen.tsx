import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import useRegister from './Register.hooks';
import AppbarComponent from './components/Appbar.component';
import { bodyStyle } from './Register.styles';
import NumberInputComponent from './components/NumberInput.component';
import NameInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateInputComponent from './components/StartDate.component';
import BirthDateInputComponent from './components/BirthDateInput.component';
import BirthStateComponent from './components/BirthState.component';
import RegisterContext from './Register.contexts';

export default function RegisterScreen() {
  const { control, submit, safeArea, setSafeArea } = useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      <View style={bodyStyle} onLayout={setSafeArea}>
        <RegisterContext.Provider value={{ safeArea }}>
          <ScrollView>
            <NumberInputComponent control={control} style={{ flex: 1 }} />
            <StartDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <NameInputComponent control={control} />
            <BirthDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <BirthStateComponent control={control} />
          </ScrollView>
          <ButtonComponent onPress={submit} style={{ marginTop: 'auto' }} />
        </RegisterContext.Provider>
      </View>
    </View>
  );
}
