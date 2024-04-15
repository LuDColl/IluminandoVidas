import { useForm } from 'react-hook-form';
import RegisterForm from './models/register.form';

export default function useRegister() {
  const { control, handleSubmit, setValue, getValues } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      number: '',
      startDate: '',
    },
  });

  const submit = handleSubmit((data) => console.log(data));

  const setStartDate = (startDate: string) => setValue('startDate', startDate);
  const getStartDate = () => getValues().startDate;

  return { control, submit, setStartDate, getStartDate };
}
