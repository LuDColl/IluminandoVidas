import { StyleProp, View, ViewStyle } from 'react-native';
import { Avatar, IconButton, TouchableRipple } from 'react-native-paper';

export default function IconButtonComponent({
  image,
  style,
  onPress,
}: {
  image?: string | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: () => void;
}) {
  return (
    <View style={style}>
      {image ? (
        <TouchableRipple
          onPress={onPress}
          style={{ borderRadius: 50 }}
          borderless={true}
        >
          <Avatar.Image size={60} source={{ uri: image }} />
        </TouchableRipple>
      ) : (
        <IconButton
          mode="contained"
          icon="face-recognition"
          onPress={onPress}
          size={36}
        />
      )}
    </View>
  );
}
