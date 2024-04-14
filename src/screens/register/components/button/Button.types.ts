import { StyleProp, ViewStyle } from 'react-native';

export type ButtonPropsType = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
