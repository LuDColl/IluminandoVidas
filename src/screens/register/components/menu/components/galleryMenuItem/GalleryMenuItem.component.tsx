import { Menu } from 'react-native-paper';
import { GalleryMenuItemPropsType } from './GalleryMenuImte.types';
import useGalleryMenuItem from './GalleryMenuItem.hooks';

export default function GalleryMenuItemComponent({
  setImage,
}: GalleryMenuItemPropsType) {
  const { pickImage } = useGalleryMenuItem(setImage);
  return <Menu.Item leadingIcon="image" onPress={pickImage} title="Galeria" />;
}
