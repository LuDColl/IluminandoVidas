import { StyleProp, Text, View, ViewStyle } from 'react-native';

export default function Home() {
  return (
    <View style={style}>
      <Text>Hello World!!</Text>
    </View>
  );
}

const style: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
