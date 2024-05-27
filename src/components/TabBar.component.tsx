import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

export type RootStackParamList = {
  'Lista Alunos': undefined;
  Prontuario: { aluno: any };
};

export default function TabBarComponent({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) preventDefault();
        else
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon)
          return options.tabBarIcon({ focused, color, size: 24 });

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        return options.tabBarLabel as string;
      }}
    />
  );
}
