import { JSXElementConstructor, ReactElement } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

export type TextInputType = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextInputPropsType<TFieldValues, TName>
) => ReactElement<any, string | JSXElementConstructor<any>>;

export type TextInputPropsType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  children?: TextInputLabelProp;
  style?: StyleProp<ViewStyle> | undefined;
};
