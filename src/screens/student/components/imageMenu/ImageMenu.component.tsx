import IconButtonComponent from './components/IconButton.component';
import GalleryMenuItemComponent from './components/GalleryMenuItem.component';
import CameraMenuItemComponent from './components/CameraMenuItem.component';
import MenuComponent from '../Menu.component';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export default function ImageMenuComponent({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  const [image, setImage] = useState<string>();

  const setImageAndCloseMenu = (closeMenu: () => void) => (image: string) => {
    closeMenu();
    setImage(image);
  };

  return (
    <MenuComponent
      anchor={({ openMenu }) => (
        <IconButtonComponent image={image} style={style} onPress={openMenu} />
      )}
      render={({ closeMenu }) => (
        <>
          <CameraMenuItemComponent setImage={setImageAndCloseMenu(closeMenu)} />
          <GalleryMenuItemComponent
            setImage={setImageAndCloseMenu(closeMenu)}
          />
        </>
      )}
    />
  );
}
