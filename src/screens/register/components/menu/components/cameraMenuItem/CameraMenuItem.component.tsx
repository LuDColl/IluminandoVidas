import { Menu } from 'react-native-paper';
import { MenuItemPropsType } from '../../types/MenuItem.types';
import useCameraMenuItem from './CameraMenuItem.hooks';

export default function CameraMenuItemComponent({
  setImage,
}: MenuItemPropsType) {
  const { pickImage } = useCameraMenuItem(setImage);
  return <Menu.Item leadingIcon="camera" onPress={pickImage} title="Câmera" />;
}
