import { ReactNode } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  RenderProps,
  TextInputLabelProp,
} from 'react-native-paper/lib/typescript/components/TextInput/types';

export default function TextInputComponent({
  label,
  onChangeText,
  onBlur,
  value,
  error,
  right,
  editable,
  disabled,
  left,
  outlineStyle,
  style,
  keyboardType,
  secureTextEntry,
  render,
}: {
  label?: TextInputLabelProp;
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?: (args: any) => void;
  value?: string;
  error?: boolean;
  right?: ReactNode;
  editable?: boolean | undefined;
  disabled?: boolean;
  left?: ReactNode;
  outlineStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  render?: (props: RenderProps) => React.ReactNode;
}) {
  return (
    <TextInput
      label={label}
      mode="outlined"
      outlineStyle={outlineStyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      error={error}
      right={right}
      editable={editable}
      disabled={disabled}
      left={left}
      style={style}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      render={render}
    />
  );
}
