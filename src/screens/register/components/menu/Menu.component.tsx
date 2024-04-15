import { Menu } from 'react-native-paper';
import { MenuPropsType } from './Menu.types';
import useMenu from './Menu.hooks';
import IconButtonComponent from './components/IconButton.component';

export default function MenuComponent({ style }: MenuPropsType) {
  const { visible, closeMenu, openMenu } = useMenu();
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<IconButtonComponent style={style} onPress={openMenu} />}
    >
      <Menu.Item leadingIcon="camera" onPress={() => {}} title="Câmera" />
      <Menu.Item leadingIcon="image" onPress={() => {}} title="Galeria" />
    </Menu>
  );
}
