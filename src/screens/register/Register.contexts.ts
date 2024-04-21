import { createContext } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { LayoutRectangle } from 'react-native';
import RegisterForm from './models/register.form';

interface RegisterContextValue {
  safeArea?: LayoutRectangle;
  useUf?: [uf: string | undefined, setUf: (uf: string) => void];
  setValue?: UseFormSetValue<RegisterForm>;
}

export const RegisterContext = createContext<RegisterContextValue>({});
