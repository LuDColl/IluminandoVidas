import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

type TextInputType = (props: {
  label?: TextInputLabelProp | undefined;
  onChangeText?: (text: string) => void | undefined;
  onBlur?: () => void | undefined;
  value?: string | undefined;
  error?: boolean | undefined;
  right?: ReactNode;
  editable?: boolean | undefined;
  disabled?: boolean | undefined;
  left?: ReactNode;
  outlineStyle?: StyleProp<ViewStyle>;
}) => ReactNode;

const TextInputComponent: TextInputType = ({
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
}) => (
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
  />
);

export default TextInputComponent;
