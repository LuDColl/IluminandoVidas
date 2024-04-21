import MenuComponent from './Menu.component';
import ControlInputComponent from './ControlInput.component';
import { RegisterControlType } from '../Register.types';
import { Menu, TextInput } from 'react-native-paper';
import ControlComponent from './Control.component';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { RegisterContext } from '../Register.contexts';

const instance = axios.create({ baseURL: 'https://brasilapi.com.br/api' });

interface State {
  id: number;
  sigla: string;
  nome: string;
}

const getStates = async () => {
  const response = await instance.get<State[]>('/ibge/uf/v1');
  return response.data;
};

const useBirthState = () => {
  const { safeArea } = useContext(RegisterContext);
  const marginTop = (safeArea?.y ?? 0) + 12;

  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    getStates().then(setStates);
  }, []);

  return { states, marginTop };
};

const BirthStateComponent = ({ control }: RegisterControlType) => {
  const { states, marginTop } = useBirthState();
  return (
    <ControlComponent
      control={control}
      name="birthState"
      render={({ onChange }) => (
        <MenuComponent
          style={{ marginTop }}
          archor={({ visible, openMenu }) => (
            <ControlInputComponent
              control={control}
              label="Estado de nascimento"
              name="birthState"
              editable={false}
              right={
                <TextInput.Icon
                  icon={visible ? 'chevron-up' : 'chevron-down'}
                  onPress={openMenu}
                />
              }
            />
          )}
          render={({ closeMenu }) => (
            <View>
              {states.map((state) => (
                <Menu.Item
                  key={state.sigla}
                  title={state.nome}
                  onPress={() => {
                    onChange(state.nome);
                    closeMenu();
                  }}
                />
              ))}
            </View>
          )}
        />
      )}
    />
  );
};

export default BirthStateComponent;
