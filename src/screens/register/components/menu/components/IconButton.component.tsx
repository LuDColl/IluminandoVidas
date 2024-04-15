import { StyleProp, ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';

type IconButtonPropsType = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

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
