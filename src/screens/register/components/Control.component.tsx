import {
  Controller,
  ControllerRenderProps,
  FieldPath,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';
import { HelperText } from 'react-native-paper';
import RegisterForm from '../models/register.form';
import { ReactElement } from 'react';

export default function ControlComponent<
  TName extends FieldPath<RegisterForm>
>({
  style,
  name,
  rules,
  render,
}: {
  style?: StyleProp<ViewStyle>;
  name: TName;
  rules?: Omit<
    RegisterOptions<RegisterForm, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  render: (
    props: { hasError: boolean } & ControllerRenderProps<RegisterForm, TName>
  ) => ReactElement;
}) {
  const { control } = useFormContext<RegisterForm>();

  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: field, fieldState: { error } }) => {
          const hasError = !!error;
          return (
            <>
              {render({ ...field, hasError })}
              {rules && (
                <HelperText type="error" visible={hasError}>
                  {error?.message}
                </HelperText>
              )}
            </>
          );
        }}
      />
    </View>
  );
}
