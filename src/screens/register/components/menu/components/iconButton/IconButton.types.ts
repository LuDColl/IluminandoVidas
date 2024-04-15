import { StyleProp, ViewStyle } from 'react-native';

export type IconButtonPropsType = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};
