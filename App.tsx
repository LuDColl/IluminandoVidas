import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';
import SearchScreen from 'screens/search/Search.screen';
import RegisterScreen from 'screens/register/Register.screen';
import { Stack } from 'router';
import { theme, LightTheme } from 'theme';

registerTranslation('pt-BR', pt);

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
