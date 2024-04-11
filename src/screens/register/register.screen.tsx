import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Appbar, Button, Divider, IconButton } from 'react-native-paper';
import RegisterRequest from './models/requests/register.request';
import TextInputComponent from './components/textInput/TextInput.component';

export default function RegisterScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      number: '',
      name: '',
    },
  });

  const onSubmit = (data: RegisterRequest) => console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Cadastro" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          padding: 16,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <TextInputComponent
              control={control}
              name="number"
              style={{ flex: 1 }}
              rules={{ required: 'Número obrigatório' }}
            >
              Número
            </TextInputComponent>
            <IconButton
              style={{ marginLeft: 16 }}
              icon="camera"
              mode="contained"
              size={36}
              onPress={() => console.log('Pressed')}
            />
          </View>

          <Divider style={{ marginVertical: 16 }} />
          <TextInputComponent
            control={control}
            name="name"
            rules={{ required: 'Nome obrigatório' }}
          >
            Nome
          </TextInputComponent>
        </ScrollView>
        <Button
          mode="elevated"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 'auto' }}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
}
