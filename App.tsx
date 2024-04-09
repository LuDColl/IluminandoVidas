import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from 'screens/home/Home.screen';
import theme from 'theme';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <HomeScreen />
      </PaperProvider>
    </NavigationContainer>
  );
}
