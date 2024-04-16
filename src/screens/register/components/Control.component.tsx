import { Controller, ControllerRenderProps, FieldPath } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import RegisterForm from '../models/register.form';
import { ControlBasePropsType } from '../Register.types';

export type ControlPropsType<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
> = {
  render: (
    field: { hasError: boolean } & ControllerRenderProps<RegisterForm, TName>
  ) => React.JSX.Element;
} & ControlBasePropsType<TName>;

export default function ControlComponent<
  TName extends FieldPath<RegisterForm> = FieldPath<RegisterForm>
>({ control, style, name, rules, render }: ControlPropsType<TName>) {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: field, fieldState: { error } }) => {
          const hasError = !!error;
          return (
            <View>
              {render({ ...field, hasError })}
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
