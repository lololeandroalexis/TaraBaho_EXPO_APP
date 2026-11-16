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

// Figma: "Forgot Password" (53:2)
export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  return (
    <DesignCanvas>
      <ScreenBackground />
      <Text style={{ position: 'absolute', left: 93.5, top: 250, width: 200, ...T(24) }}>Forgot Password</Text>
      <FieldBox shadow left={48} top={320} placeholder="Email Address:" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <PillButton label="Send" left={96} top={368} onPress={() => navigation.navigate('ResetPassword')} />

      <View style={{ position: 'absolute', left: 192, top: 484 }}><LineLong /></View>
      <View style={{ position: 'absolute', left: 25, top: 484 }}><LineShort /></View>
      <Text style={{ position: 'absolute', left: 172, top: 477, ...T(12) }}>Or</Text>
      <Pressable onPress={() => navigation.navigate('Login')} style={{ position: 'absolute', left: 131, top: 488, width: 110, height: 38, justifyContent: 'center' }}>
        <Text style={{ ...T(12), fontFamily: fonts.interExtraBold }}>Go Back To Log In</Text>
      </Pressable>

      <AuthHeader height={175} />
    </DesignCanvas>
  );
}
