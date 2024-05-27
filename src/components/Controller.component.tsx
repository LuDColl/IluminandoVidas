import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';
import { HelperText } from 'react-native-paper';
import { ReactElement } from 'react';

export default function ControllerComponent<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  style,
  name,
  rules,
  render,
}: {
  control?: Control<TFieldValues>;
  style?: StyleProp<ViewStyle>;
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  render: (
    props: { hasError: boolean } & ControllerRenderProps<TFieldValues, TName>
  ) => ReactElement;
}) {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => {
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
