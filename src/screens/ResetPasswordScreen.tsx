import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { DesignCanvas } from '../components/DesignCanvas';
import { ScreenBackground } from '../components/ScreenBackground';
import { AuthHeader } from '../components/AuthHeader';
import { PillButton } from '../components/PillButton';
import { FieldBox } from '../components/FieldBox';
import LineLong from '../../assets/svg/line-long.svg';
import LineShort from '../../assets/svg/line-short.svg';
import { colors, fonts } from '../theme';

const T = (size: number) => ({ fontSize: size, color: colors.onSurface, fontFamily: fonts.robotoExtraBold });

// Figma: "Reset Password" (58:36)
export default function ResetPasswordScreen({ navigation }: any) {
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  return (
    <DesignCanvas>
      <ScreenBackground />
      <Text style={{ position: 'absolute', left: 93.5, top: 250, width: 200, ...T(24) }}>Reset Password</Text>
      <FieldBox shadow left={48} top={320} placeholder="New Password:" value={pw} onChangeText={setPw} secure />
      <FieldBox shadow left={48} top={372} placeholder="Confirm Password:" value={pw2} onChangeText={setPw2} secure />
      <PillButton label="Reset Password" left={101} top={432} onPress={() => navigation.navigate('Login')} />

      <View style={{ position: 'absolute', left: 192, top: 537 }}><LineLong /></View>
      <View style={{ position: 'absolute', left: 25, top: 537 }}><LineShort /></View>
      <Text style={{ position: 'absolute', left: 172, top: 530, ...T(12) }}>Or</Text>
      <Pressable onPress={() => navigation.navigate('Login')} style={{ position: 'absolute', left: 131, top: 541, width: 110, height: 38, justifyContent: 'center' }}>
        <Text style={{ ...T(12), fontFamily: fonts.interExtraBold }}>Go Back To Log In</Text>
      </Pressable>

      <AuthHeader height={175} />
    </DesignCanvas>
  );
}
