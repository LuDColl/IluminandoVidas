import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';
import { Stack } from 'router';
import { theme, LightTheme } from 'theme';
import HomeScreen from 'screens/home/Home.screen';
import LoginScreen from 'screens/login/Login.screen';
import StudentsScreen from 'screens/students/Students.screen';
import CitiesScreen from 'screens/cities/Cities.screen';
import TutorScreen from 'screens/tutor/tutor.screen';

registerTranslation('pt-BR', pt);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Student" component={TutorScreen} />
          <Stack.Screen name="Cities" component={CitiesScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tutor" component={TutorScreen} />
          <Stack.Screen name="Students" component={StudentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
