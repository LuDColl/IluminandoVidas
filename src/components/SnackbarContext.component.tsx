import { Dispatch, ReactNode, SetStateAction } from 'react';
import { View, ViewStyle } from 'react-native';
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
  style?: ViewStyle | undefined;
}) {
  return (
    <View style={{ ...style, flex: 1 }}>
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
