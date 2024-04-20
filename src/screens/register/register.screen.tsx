import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import useRegister from './Register.hooks';
import AppbarComponent from './components/Appbar.component';
import { bodyStyle } from './Register.styles';
import NumberInputComponent from './components/NumberInput.component';
import NumbeInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateComponent from './components/startDate/StartDate.component';

export default function RegisterScreen() {
  const { control, submit } = useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      <View style={bodyStyle}>
        <ScrollView>
          <NumberInputComponent control={control} style={{ flex: 1 }} />
          <StartDateComponent control={control} />
          <Divider style={{ marginBottom: 16 }} />
          <NumbeInputComponent control={control} />
        </ScrollView>
        <ButtonComponent onPress={submit} style={{ marginTop: 'auto' }} />
      </View>
    </View>
  );
}
