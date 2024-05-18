import { Key, ReactNode, useContext } from 'react';
import ControlComponent from './Control.component';
import MenuComponent from './Menu.component';
import { Menu, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { RegisterContext } from '../Register.contexts';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from '../Register.types';
import TextInputComponent from 'components/TextInput.component';

const useSelectInput = () => {
  const { safeArea } = useContext(RegisterContext);
  const marginTop = (safeArea?.y ?? 0) + 12;
  return { marginTop };
};

type SelectInputType = <TName extends RegisterFieldPathType, TItem>(
  props: {
    label: string;
    items: TItem[] | null;
    getKey: (item: TItem) => Key;
    getText: (item: TItem) => string;
    onChange?: (item: TItem) => void;
  } & InputControlPropsType<TName>
) => ReactNode;

const SelectInputComponent: SelectInputType = ({
  control,
  name,
  rules,
  label,
  getKey,
  getText,
  items,
  onChange: valueOnChange,
}) => {
  const { marginTop } = useSelectInput();
  const loading = items === null;
  const disabled = loading || items.length === 0;
  return (
    <ControlComponent
      control={control}
      name={name}
      rules={rules}
      render={({ onChange, value, hasError }) => (
        <MenuComponent
          style={{ marginTop }}
          archor={({ visible, openMenu }) => (
            <TextInputComponent
              label={label}
              editable={false}
              value={value}
              disabled={disabled}
              error={hasError}
              right={
                <TextInput.Icon
                  icon={visible ? 'chevron-up' : 'chevron-down'}
                  animated={true}
                  onPress={openMenu}
                  disabled={disabled}
                />
              }
            />
          )}
          render={({ closeMenu }) => (
            <View>
              {items?.map((value: any) => (
                <Menu.Item
                  key={getKey(value)}
                  title={getText(value)}
                  onPress={() => {
                    if (valueOnChange) valueOnChange(value);
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
