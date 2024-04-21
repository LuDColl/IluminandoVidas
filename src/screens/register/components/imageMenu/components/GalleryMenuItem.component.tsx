import { Menu } from 'react-native-paper';
import { MenuItemPropsType } from '../ImageMenu.types';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';

const useGalleryMenuItem = (setImage: (image: string) => void) => {
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: false,
      aspect: [1, 1],
    });

    if (result.canceled) return;
    setImage(result.assets[0].uri);
  };

  return { pickImage };
};

const GalleryMenuItemComponent = ({ setImage }: MenuItemPropsType) => {
  const { pickImage } = useGalleryMenuItem(setImage);
  return <Menu.Item leadingIcon="image" onPress={pickImage} title="Galeria" />;
};

export default GalleryMenuItemComponent;
