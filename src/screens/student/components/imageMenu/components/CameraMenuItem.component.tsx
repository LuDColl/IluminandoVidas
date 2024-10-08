import { Menu } from 'react-native-paper';
import {
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
} from 'expo-image-picker';

export default function CameraMenuItemComponent({
  setImage,
}: {
  setImage: (image: string) => void;
}) {
  const [status, requestPermission] = useCameraPermissions();

  const pickImage = async () => {
    if (!status?.granted) {
      const response = await requestPermission();
      if (!response.granted) return;
    }

    const result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: false,
      aspect: [1, 1],
    });

    if (result.canceled) return;
    setImage(result.assets[0].uri);
  };

  return <Menu.Item leadingIcon="camera" onPress={pickImage} title="Câmera" />;
}
