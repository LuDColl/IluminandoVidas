import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorResponse from 'screens/home/models/tutor.response';

export type RootStackParamList = {
  Student?: { city?: string; id?: number };
  Cities: { uf: string };
  Login: any;
  Home: TutorResponse;
  Tutor?: { id: number };
  Tutors: any;
  Students: any;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
