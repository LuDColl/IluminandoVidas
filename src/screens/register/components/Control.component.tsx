import { Controller, ControllerRenderProps } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';
import { HelperText } from 'react-native-paper';
import RegisterForm from '../models/register.form';
import {
  InputControlPropsType,
  RegisterFieldPathType,
} from '../Register.types';
import { ReactNode } from 'react';

type ControlType = <TName extends RegisterFieldPathType>(
  props: {
    render: (
      field: { hasError: boolean } & ControllerRenderProps<RegisterForm, TName>
    ) => React.JSX.Element;
    style?: StyleProp<ViewStyle> | undefined;
  } & InputControlPropsType<TName>
) => ReactNode;

const ControlComponent: ControlType = ({
  control,
  style,
  name,
  rules,
  render,
}) => (
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

export default ControlComponent;
