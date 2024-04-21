import { createContext } from 'react';
import { LayoutRectangle } from 'react-native';

interface RegisterContextValue {
  safeArea?: LayoutRectangle;
}

export const RegisterContext = createContext<RegisterContextValue>({});
