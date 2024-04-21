import { useForm } from 'react-hook-form';
import RegisterForm from './models/register.form';
import { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export const useRegister = () => {
  const [safeArea, setSafeArea] = useState<LayoutRectangle>();
  const useUf = useState<string>();

  const setSafeAreaByEvent = ({ nativeEvent }: LayoutChangeEvent) =>
    setSafeArea(nativeEvent.layout);

  const { control, handleSubmit, setValue } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      number: '',
      startDate: '',
      birthCity: '',
      birthDate: '',
      birthState: '',
    },
  });

  const submit = handleSubmit((data) => console.log(data));

  return {
    control,
    submit,
    setSafeArea: setSafeAreaByEvent,
    safeArea,
    useUf,
    setValue,
  };
};
