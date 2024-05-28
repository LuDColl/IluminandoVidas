import { Menu } from 'react-native-paper';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';

export default function GalleryMenuItemComponent({
  setImage,
}: {
  setImage: (image: string) => void;
}) {
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

  return <Menu.Item leadingIcon="image" onPress={pickImage} title="Galeria" />;
}
