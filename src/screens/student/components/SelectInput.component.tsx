import { Key, ReactNode, useContext } from 'react';
import StudentControlComponent from './StudentController.component';
import MenuComponent from './Menu.component';
import { Menu, TextInput } from 'react-native-paper';
import { RegisterContext } from '../student.context';
import { FieldPath, RegisterOptions } from 'react-hook-form';
import StudentForm from '../models/student.form';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import TextInputComponent from 'components/inputs/TextInput.component';

export default function SelectInputComponent<
  TName extends FieldPath<StudentForm>,
  TItem
>({
  name,
  rules,
  label,
  getKey,
  getText,
  items,
  onChange: onItemChange,
}: {
  name: TName;
  rules?: Omit<
    RegisterOptions<StudentForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  label?: TextInputLabelProp;
  items?: TItem[];
  getKey: (item: TItem) => Key | null | undefined;
  getText: (item: TItem) => ReactNode;
  onChange?: (item: TItem) => void;
}) {
  const { safeArea } = useContext(RegisterContext);
  const marginTop = (safeArea?.y ?? 0) + 12;
  const loading = !items;
  const disabled = loading || items.length === 0;

  return (
    <StudentControlComponent
      name={name}
      rules={rules}
      render={({ onChange, value, hasError }) => (
        <MenuComponent
          style={{ marginTop }}
          anchor={({ visible, openMenu }) => (
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
            <>
              {items?.map((item: any) => (
                <Menu.Item
                  key={getKey(item)}
                  title={getText(item)}
                  onPress={() => {
                    if (onItemChange) onItemChange(item);
                    onChange(getText(item));
                    closeMenu();
                  }}
                />
              ))}
            </>
          )}
        />
      )}
    />
  );
}
