import { Dispatch, ReactNode, SetStateAction } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Snackbar } from 'react-native-paper';

export default function SnackbarContextComponet({
  message,
  setMessage,
  children,
  style,
}: {
  message?: string | null;
  setMessage: Dispatch<SetStateAction<string | null>>;
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}) {
  return (
    <View style={style}>
      {children}
      <Snackbar
        visible={!!message}
        onDismiss={() => setMessage(null)}
        icon="close"
        onIconPress={() => setMessage(null)}
      >
        {message}
      </Snackbar>
    </View>
  );
}
