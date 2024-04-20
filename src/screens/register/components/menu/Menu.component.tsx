import { Menu } from 'react-native-paper';
import { MenuPropsType } from './Menu.types';
import useMenu from './Menu.hooks';
import IconButtonComponent from './components/IconButton.component';
import GalleryMenuItemComponent from './components/galleryMenuItem/GalleryMenuItem.component';
import CameraMenuItemComponent from './components/cameraMenuItem/CameraMenuItem.component';

export default function MenuComponent({ style }: MenuPropsType) {
  const { visible, closeMenu, openMenu, image, setImage } = useMenu();
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButtonComponent image={image} style={style} onPress={openMenu} />
      }
    >
      <CameraMenuItemComponent setImage={setImage} />
      <GalleryMenuItemComponent setImage={setImage} />
    </Menu>
  );
}