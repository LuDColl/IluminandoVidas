import { ReactNode } from 'react';
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
}) => (
  <TextInput
    label={label}
    mode="outlined"
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
