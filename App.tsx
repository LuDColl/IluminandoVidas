import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import RegisterScreen from 'screens/register/Register.screen';
import theme from 'theme';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {/* <HomeScreen /> */}
        <RegisterScreen />
      </PaperProvider>
    </NavigationContainer>
  );
}
