import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarComponent from 'components/TabBar.component';
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import StudentsScreen from 'screens/students/Students.screen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBarComponent}
    >
      <Tab.Screen
        name="home"
        component={View}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="students"
        component={StudentsScreen}
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                source="format-list-bulleted-square"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
