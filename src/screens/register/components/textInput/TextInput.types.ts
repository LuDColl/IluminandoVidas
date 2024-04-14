import { Control, FieldPath, RegisterOptions } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import RegisterRequest from 'screens/register/models/requests/register.request';

export type TextInputPropsType<
  TName extends FieldPath<RegisterRequest> = FieldPath<RegisterRequest>
> = {
  name: TName;
  control: Control<RegisterRequest>;
  rules?: Omit<
    RegisterOptions<RegisterRequest, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  label: TextInputLabelProp;
  style?: StyleProp<ViewStyle> | undefined;
};
