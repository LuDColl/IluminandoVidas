import { textColor } from 'colors';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export const screenStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 16,
};

export const identificationStyle: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  width: '100%',
};

export const identificationDataStyle: StyleProp<ViewStyle> = {
  paddingLeft: 16,
};

export const imgageStyle: StyleProp<ImageStyle> = { width: 150, height: 150 };
export const faceStyle: StyleProp<ImageStyle> = {
  ...imgageStyle,
  borderRadius: 8,
};

export const textStyle: StyleProp<TextStyle> = { color: textColor };
export const nextTextStyle: StyleProp<TextStyle> = {
  ...textStyle,
  marginTop: 8,
};
export const startTextStyle: StyleProp<TextStyle> = {
  ...textStyle,
  alignSelf: 'flex-start',
};

export const hrStyle: StyleProp<ViewStyle> = {
  backgroundColor: textColor,
  height: 1,
  width: '100%',
  marginVertical: 16,
};

export const halfHrStyle: StyleProp<ViewStyle> = {
  ...hrStyle,
  marginVertical: 8,
};
