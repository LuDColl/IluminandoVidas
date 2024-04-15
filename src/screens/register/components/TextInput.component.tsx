import {
  Control,
  Controller,
  FieldPath,
  RegisterOptions,
} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import RegisterForm from 'screens/register/models/register.form';

type TextInputPropsType<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
> = {
  name: TName;
  control: Control<RegisterForm>;
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  label: string;
  style?: StyleProp<ViewStyle> | undefined;
  right?: React.ReactNode;
  editable?: boolean;
};

export default function TextInputComponent<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
>({
  name,
  rules,
  label,
  control,
  style,
  right,
  editable,
}: TextInputPropsType<TName>) {
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
                right={right}
                editable={editable}
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
