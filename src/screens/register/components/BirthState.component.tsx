import MenuComponent from './Menu.component';
import TextInputComponent from './TextInput.component';
import { RegisterControlType } from '../Register.types';
import { Menu, TextInput } from 'react-native-paper';
import ControlComponent from './Control.component';

export default function BirthStateComponent({ control }: RegisterControlType) {
  return (
    <ControlComponent
      control={control}
      name="birthState"
      render={({ onChange }) => (
        <MenuComponent
          anchorPosition="bottom"
          archor={({ visible, openMenu }) => (
            <TextInputComponent
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
            <Menu.Item
              title="São Paulo"
              onPress={() => {
                onChange('São Paulo');
                closeMenu();
              }}
            />
          )}
        />
      )}
    />
  );
}
