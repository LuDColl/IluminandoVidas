import { createContext } from 'react';
import { LayoutRectangle } from 'react-native';

interface StudentContextValue {
  safeArea?: LayoutRectangle;
}

export const RegisterContext = createContext<StudentContextValue>({});
