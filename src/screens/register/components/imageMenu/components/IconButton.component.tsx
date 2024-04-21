import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Avatar, IconButton, TouchableRipple } from 'react-native-paper';

type IconButton = (props: {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  image: string | null;
}) => ReactNode;

const IconButtonComponent: IconButton = ({ image, style, onPress }) => (
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

export default IconButtonComponent;
