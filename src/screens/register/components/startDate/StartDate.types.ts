import { InputPropsType } from 'screens/register/Register.types';

export type StartDatePropsType = UseStartDatePropsType & InputPropsType;

export type UseStartDatePropsType = {
  setStartDate: (startDate: string) => void;
  getStartDate: () => string;
};
