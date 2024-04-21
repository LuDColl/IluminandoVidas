import { createContext } from 'react';
import { LayoutRectangle } from 'react-native';

interface RegisterContextValue {
  safeArea?: LayoutRectangle;
}

const RegisterContext = createContext<RegisterContextValue>({});

export default RegisterContext;
