import { Menu } from 'react-native-paper';
import useMenu from './Menu.hooks';
import { MenuPropsType } from './Menu.types';

export default function MenuComponent({ archor, render }: MenuPropsType) {
  const menu = useMenu();

  return (
    <Menu
      visible={menu.visible}
      onDismiss={menu.closeMenu}
      anchor={archor(menu)}
    >
      {render(menu)}
    </Menu>
  );
}
