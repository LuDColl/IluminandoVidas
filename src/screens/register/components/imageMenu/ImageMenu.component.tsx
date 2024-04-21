import IconButtonComponent from './components/IconButton.component';
import GalleryMenuItemComponent from './components/GalleryMenuItem.component';
import CameraMenuItemComponent from './components/CameraMenuItem.component';
import MenuComponent from '../Menu.component';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type ImageMenuPropsType = { style?: StyleProp<ViewStyle> };

function useImageMenu() {
  const [image, setImage] = useState<string | null>(null);

  const setImageAndCloseMenu = (closeMenu: () => void) => (image: string) => {
    closeMenu();
    setImage(image);
  };

  return {
    image,
    setImage: setImageAndCloseMenu,
  };
}

export default function ImageMenuComponent({ style }: ImageMenuPropsType) {
  const { image, setImage } = useImageMenu();
  return (
    <MenuComponent
      archor={({ openMenu }) => (
        <IconButtonComponent image={image} style={style} onPress={openMenu} />
      )}
      render={({ closeMenu }) => (
        <>
          <CameraMenuItemComponent setImage={setImage(closeMenu)} />
          <GalleryMenuItemComponent setImage={setImage(closeMenu)} />
        </>
      )}
    />
  );
}
