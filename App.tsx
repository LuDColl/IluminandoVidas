import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';
import SearchScreen from 'screens/search/Search.screen';
import RegisterScreen from 'screens/register/Register.screen';
import { Stack } from 'router';
import { theme, LightTheme } from 'theme';
import HomeScreen from 'screens/home/Home.screen';
import LoginScreen from 'screens/login/Login.screen';
import UserRegisterScreen from 'screens/userRegister/UserRegister.screen';
import StudentsScreen from 'screens/students/Students.screen';

registerTranslation('pt-BR', pt);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserRegister" component={UserRegisterScreen} />
          <Stack.Screen name="Students" component={StudentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
