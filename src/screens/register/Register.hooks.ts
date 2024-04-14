import { useForm } from 'react-hook-form';
import RegisterRequest from './models/requests/register.request';

export default function useRegister() {
  const { control, handleSubmit } = useForm<RegisterRequest>({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onPress = handleSubmit((data) => console.log(data));

  return { control, onPress };
}
