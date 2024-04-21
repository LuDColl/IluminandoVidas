import { Menu } from 'react-native-paper';
import { ReactNode, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

type StateMenuType = {
  visible: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

type UseMenuType = () => {
  width: number;
  setWidth: (event: LayoutChangeEvent) => void;
} & StateMenuType;

type MenuPropsType = {
  archor: (props: StateMenuType) => ReactNode;
  render: (props: StateMenuType) => ReactNode;
  anchorPosition?: 'top' | 'bottom' | undefined;
  contentStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  style?: ViewStyle;
};

const useMenu: UseMenuType = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [width, setWidth] = useState(0);

  const setWidthByLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  return {
    visible,
    openMenu,
    closeMenu,
    width,
    setWidth: setWidthByLayout,
  };
};

export default function MenuComponent({
  archor,
  render,
  anchorPosition,
  contentStyle,
  style,
}: MenuPropsType) {
  const menu = useMenu();
  return (
    <View onLayout={menu.setWidth}>
      <Menu
        visible={menu.visible}
        onDismiss={menu.closeMenu}
        anchor={archor(menu)}
        anchorPosition={anchorPosition}
        contentStyle={contentStyle}
        style={{ ...style, minWidth: menu.width }}
      >
        {render(menu)}
      </Menu>
    </View>
  );
}
