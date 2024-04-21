import { useForm } from 'react-hook-form';
import RegisterForm from './models/register.form';
import { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export const useRegister = () => {
  const [safeArea, setSafeArea] = useState<LayoutRectangle>();

  const setSafeAreaByEvent = ({ nativeEvent }: LayoutChangeEvent) =>
    setSafeArea(nativeEvent.layout);

  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      number: '',
      startDate: '',
    },
  });

  const submit = handleSubmit((data) => console.log(data));

  return { control, submit, setSafeArea: setSafeAreaByEvent, safeArea };
};
