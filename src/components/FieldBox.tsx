import React from 'react';
import { TextInput, View } from 'react-native';
import { colors, fonts, shadow } from '../theme';

/** Outlined 264x41 input from the auth screens (1px outline, 4px top radius). */
export function FieldBox(props: { left: number; top: number; placeholder: string; secure?: boolean; shadow?: boolean; value: string; onChangeText: (t: string) => void; right?: React.ReactNode; keyboardType?: 'default' | 'email-address' }) {
  return (
    <View style={[{ position: 'absolute', left: props.left, top: props.top, width: 264, height: 41, borderWidth: 1, borderColor: colors.outline, backgroundColor: 'rgba(255,255,255,0.1)', borderTopLeftRadius: 4, borderTopRightRadius: 4, justifyContent: 'center' }, props.shadow ? shadow : null]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={colors.onSurface}
        secureTextEntry={props.secure}
        autoCapitalize="none"
        keyboardType={props.keyboardType}
        style={{ paddingHorizontal: 8, paddingRight: 36, fontSize: 13, color: colors.onSurface, fontFamily: fonts.robotoExtraBold, height: 41 }}
      />
      {props.right}
    </View>
  );
}
