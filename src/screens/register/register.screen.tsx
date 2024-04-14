import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import useRegister from './Register.hooks';
import AppbarComponent from './components/appbar/Appbar.component';
import { bodyStyle, numberRowStyle } from './Register.styles';
import NumberInputComponent from './components/numberInput/NumberInput.component';
import MenuComponent from './components/menu/Menu.component';
import NumbeInputComponent from './components/nameInput/NameInput.component';
import ButtonComponent from './components/button/Button.component';

export default function RegisterScreen() {
  const { control, onPress } = useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      <View style={bodyStyle}>
        <ScrollView>
          <View style={numberRowStyle}>
            <NumberInputComponent control={control} style={{ flex: 1 }} />
            <MenuComponent style={{ marginLeft: 16 }} />
          </View>
          <Divider style={{ marginBottom: 16 }} />
          <NumbeInputComponent control={control} />
        </ScrollView>
        <ButtonComponent onPress={onPress} style={{ marginTop: 'auto' }} />
      </View>
    </View>
  );
}
