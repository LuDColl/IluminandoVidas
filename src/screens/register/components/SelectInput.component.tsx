import { useContext } from 'react';
import ControlComponent from './Control.component';
import MenuComponent from './Menu.component';
import RegisterContext from '../Register.contexts';
import { Menu, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import TextInputComponent from './TextInput.component';

const useSelectInput = () => {
  const { safeArea } = useContext(RegisterContext);
  const marginTop = (safeArea?.y ?? 0) + 12;

  return { marginTop };
};

export default function SelectInputComponent<T>({
  control,
  name,
  label,
  getKey,
  getText,
  values,
}: any) {
  const { marginTop } = useSelectInput();
  return (
    <ControlComponent
      control={control}
      name={name}
      render={({ onChange, value }) => (
        <MenuComponent
          style={{ marginTop }}
          archor={({ visible, openMenu }) => (
            <TextInputComponent
              label={label}
              editable={false}
              value={value}
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
              {values.map((value: any) => (
                <Menu.Item
                  key={getKey(value)}
                  title={getText(value)}
                  onPress={() => {
                    onChange(getText(value));
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
}
