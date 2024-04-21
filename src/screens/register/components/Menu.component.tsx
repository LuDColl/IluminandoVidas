import { Menu } from 'react-native-paper';
import { ReactNode, useState } from 'react';

type MenuPropsType = {
  archor: (props: UseMenuReturn) => ReactNode;
  render: (props: UseMenuReturn) => ReactNode;
};

type UseMenuReturn = {
  visible: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

function useMenu(): UseMenuReturn {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return {
    visible,
    openMenu,
    closeMenu,
  };
}

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
