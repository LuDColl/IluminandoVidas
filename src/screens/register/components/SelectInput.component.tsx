import { Key, ReactNode, useContext } from 'react';
import ControlComponent from './Control.component';
import MenuComponent from './Menu.component';
import { Menu, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import TextInputComponent from './TextInput.component';
import { RegisterContext } from '../Register.contexts';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from '../Register.types';

const useSelectInput = () => {
  const { safeArea } = useContext(RegisterContext);
  const marginTop = (safeArea?.y ?? 0) + 12;
  return { marginTop };
};

type SelectInputType = <TName extends RegisterFieldPathType, TValue>(
  props: {
    label: string;
    values: TValue[];
    getKey: (value: TValue) => Key;
    getText: (value: TValue) => string;
  } & InputControlPropsType<TName>
) => ReactNode;

const SelectInputComponent: SelectInputType = ({
  control,
  name,
  rules,
  label,
  getKey,
  getText,
  values,
}) => {
  const { marginTop } = useSelectInput();
  return (
    <ControlComponent
      control={control}
      name={name}
      rules={rules}
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
};

export default SelectInputComponent;
