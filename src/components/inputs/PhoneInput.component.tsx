import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';
import TextInputComponent from './TextInput.component';
import MaskInput, { Masks } from 'react-native-mask-input';

export default function PhoneInputComponent({
  label,
  onChangeText,
  onChangeUnmaskedText,
}: {
  label?: TextInputLabelProp;
  onChangeText?: ((text: string) => void) | undefined;
  onChangeUnmaskedText?: ((text: string) => void) | undefined;
}) {
  return (
    <TextInputComponent
      label={label}
      keyboardType="numeric"
      onChangeText={onChangeText}
      render={(props) => (
        <MaskInput
          {...props}
          mask={Masks.BRL_PHONE}
          onChangeText={(masked, unmasked) => {
            if (!props?.onChangeText) return;

            props.onChangeText(masked);
            if (!onChangeUnmaskedText) return;

            onChangeUnmaskedText(unmasked);
          }}
        />
      )}
    />
  );
}
