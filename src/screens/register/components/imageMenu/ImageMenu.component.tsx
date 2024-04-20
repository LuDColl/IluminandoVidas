import IconButtonComponent from './components/IconButton.component';
import GalleryMenuItemComponent from './components/galleryMenuItem/GalleryMenuItem.component';
import CameraMenuItemComponent from './components/cameraMenuItem/CameraMenuItem.component';
import { ImageMenuPropsType } from './ImageMenu.types';
import useImageMenu from './ImageMenu.hooks';
import MenuComponent from '../menu/Menu.component';

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
