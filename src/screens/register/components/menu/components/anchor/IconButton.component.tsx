import { IconButton } from 'react-native-paper';
import { IconButtonPropsType } from './IconButton.types';

export default function IconButtonComponent({
  style,
  onPress,
}: IconButtonPropsType) {
  return (
    <IconButton
      mode="contained"
      icon="face-recognition"
      style={style}
      onPress={onPress}
      size={36}
    />
  );
}
