import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';

export default function useGalleryMenuItem(setImage: (image: string) => void) {
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
}
