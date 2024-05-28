import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import StudentInputControllerComponent from './StudentInputController.component';

export default function NumberInputComponent({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={styles.view}>
      <StudentInputControllerComponent
        name="number"
        rules={{ required: 'Número obrigatório' }}
        label="Número"
        style={style}
        keyboardType="numeric"
      />
      {/* <ImageMenuComponent style={{ marginLeft: 16 }} />r */}
    </View>
  );
}
const styles = StyleSheet.create({
  view: { flexDirection: 'row', alignItems: 'flex-start' },
});
