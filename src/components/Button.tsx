import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from 'react-native-paper';
import { backgroundColor } from "colors";

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, children, ...rest }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
        {children}
      </TouchableOpacity>
      <Text>{title}</Text>
    </>
  );
}

{/* botão */ }
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 48,
    height: 48,
  },
})

