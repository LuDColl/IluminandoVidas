import { Menu } from 'react-native-paper';
import useGalleryMenuItem from './GalleryMenuItem.hooks';
import { MenuItemPropsType } from '../../types/MenuItem.types';

export default function GalleryMenuItemComponent({
  setImage,
}: MenuItemPropsType) {
  const { pickImage } = useGalleryMenuItem(setImage);
  return <Menu.Item leadingIcon="image" onPress={pickImage} title="Galeria" />;
}
