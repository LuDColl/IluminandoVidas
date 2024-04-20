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

export default function RegisterScreen() {
  const { control, submit } = useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      <View style={bodyStyle}>
        <ScrollView>
          <NumberInputComponent control={control} style={{ flex: 1 }} />
          <StartDateInputComponent control={control} />
          <Divider style={{ marginBottom: 16 }} />
          <NameInputComponent control={control} />
          <BirthDateInputComponent control={control} />
        </ScrollView>
        <ButtonComponent onPress={submit} style={{ marginTop: 'auto' }} />
      </View>
    </View>
  );
}
