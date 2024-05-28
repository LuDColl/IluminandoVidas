import { useState } from 'react';
import TextInputComponent from './TextInput.component';
import { TextInput, useTheme } from 'react-native-paper';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

export default function PasswordInputComponent({
  password,
  setPassword,
  label,
  error,
}: {
  password: string;
  setPassword: (password: string) => void;
  label?: TextInputLabelProp;
  error?: boolean | undefined;
}) {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInputComponent
      label={label}
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
      error={error}
      right={
        <TextInput.Icon
          icon={showPassword ? 'eye' : 'eye-off'}
          onPress={() => setShowPassword(!showPassword)}
          color={colors.primary}
        />
      }
    />
  );
}
