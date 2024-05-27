import { Dimensions, Image } from 'react-native';

export function getImageMaxHeight(image: any): number {
  const imageSource = Image.resolveAssetSource(image);
  const dimensions = Dimensions.get('window');
  const screenWidth = dimensions.width;
  const ratio = imageSource.width / imageSource.height;
  const height = screenWidth / ratio;
  return height;
}
