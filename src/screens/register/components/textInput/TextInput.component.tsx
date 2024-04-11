import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputType } from './TextInput.types';

const TextInputComponent: TextInputType = ({
  name,
  rules,
  children,
  control,
  style,
}) => {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          const hasError = !!error;
          return (
            <View>
              <TextInput
                label={children}
                mode="outlined"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={hasError}
              />
              <HelperText type="error" visible={hasError}>
                {error?.message}
              </HelperText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TextInputComponent;
