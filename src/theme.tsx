import { DefaultTheme } from '@react-navigation/native';
import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { MD3Colors, MD3Theme } from 'react-native-paper/lib/typescript/types';

const generatedLightColors: MD3Colors = {
  primary: 'rgb(151, 73, 0)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(255, 219, 199)',
  onPrimaryContainer: 'rgb(49, 19, 0)',
  secondary: 'rgb(129, 86, 0)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(255, 221, 177)',
  onSecondaryContainer: 'rgb(41, 24, 0)',
  tertiary: 'rgb(0, 104, 116)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(151, 240, 255)',
  onTertiaryContainer: 'rgb(0, 31, 36)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(255, 251, 255)',
  onBackground: 'rgb(32, 26, 23)',
  surface: 'rgb(255, 251, 255)',
  onSurface: 'rgb(32, 26, 23)',
  surfaceVariant: 'rgb(244, 222, 211)',
  onSurfaceVariant: 'rgb(82, 68, 60)',
  outline: 'rgb(132, 116, 106)',
  outlineVariant: 'rgb(215, 195, 184)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(54, 47, 43)',
  inverseOnSurface: 'rgb(251, 238, 232)',
  inversePrimary: 'rgb(255, 182, 136)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(250, 242, 242)',
    level2: 'rgb(247, 237, 235)',
    level3: 'rgb(244, 231, 227)',
    level4: 'rgb(243, 230, 224)',
    level5: 'rgb(240, 226, 219)',
  },
  surfaceDisabled: 'rgba(32, 26, 23, 0.12)',
  onSurfaceDisabled: 'rgba(32, 26, 23, 0.38)',
  backdrop: 'rgba(58, 46, 38, 0.4)',
};

export const theme: MD3Theme = {
  ...MD3LightTheme,
  colors: generatedLightColors,
};

export const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  materialLight: theme,
});
