import { Menu } from 'react-native-paper';
import { ReactNode, useState } from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';

export default function MenuComponent({
  anchor,
  render,
  anchorPosition,
  contentStyle,
  style,
}: {
  anchor: (menu: {
    visible: boolean;
    openMenu: () => void;
  }) => ReactNode | { x: number; y: number };
  render: (menu: { closeMenu: () => void }) => ReactNode;
  anchorPosition?: 'top' | 'bottom';
  contentStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  style?: ViewStyle;
}) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [width, setWidth] = useState(0);

  return (
    <View onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={anchor({ visible, openMenu })}
        anchorPosition={anchorPosition}
        contentStyle={contentStyle}
        style={{ ...style, minWidth: width }}
      >
        {render({ closeMenu })}
      </Menu>
    </View>
  );
}
