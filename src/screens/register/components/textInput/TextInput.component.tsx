import { Controller, FieldPath } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputPropsType } from './TextInput.types';
import RegisterRequest from 'screens/register/models/requests/register.request';

export default function TextInputComponent<
  TName extends FieldPath<RegisterRequest> = FieldPath<RegisterRequest>
>({ name, rules, label, control, style }: TextInputPropsType<TName>) {
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
                label={label}
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
}
