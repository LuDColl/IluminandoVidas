import { useForm } from 'react-hook-form';
import RegisterForm from './models/register.form';

export default function useRegister() {
  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onPress = handleSubmit((data) => console.log(data));

  return { control, onPress };
}
