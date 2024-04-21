import { useForm } from 'react-hook-form';
import RegisterForm from './models/register.form';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { staticAxios } from './Register.services';

export const useRegister = () => {
  const [safeArea, setSafeArea] = useState<LayoutRectangle>();
  const [loading, setLoading] = useState<boolean>(false);
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

  useEffect(() => {
    staticAxios.interceptors.request.use((config) => {
      setLoading(true);
      return config;
    });

    staticAxios.interceptors.response.use((config) => {
      setLoading(false);
      return config;
    });
  }, []);

  const submit = handleSubmit((data) => console.log(data));

  return {
    control,
    submit,
    setSafeArea: setSafeAreaByEvent,
    safeArea,
    useUf,
    setValue,
    loading,
  };
};
