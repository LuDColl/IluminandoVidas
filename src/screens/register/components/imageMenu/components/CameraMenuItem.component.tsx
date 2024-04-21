import { Menu } from 'react-native-paper';
import { MenuItemPropsType } from '../ImageMenu.types';
import {
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
} from 'expo-image-picker';

const useCameraMenuItem = (setImage: (image: string) => void) => {
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

  return { pickImage };
};

const CameraMenuItemComponent = ({ setImage }: MenuItemPropsType) => {
  const { pickImage } = useCameraMenuItem(setImage);
  return <Menu.Item leadingIcon="camera" onPress={pickImage} title="Câmera" />;
};

export default CameraMenuItemComponent;
