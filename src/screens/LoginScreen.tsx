import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DesignCanvas } from '../components/DesignCanvas';
import { ScreenBackground } from '../components/ScreenBackground';
import { PillButton } from '../components/PillButton';
import { FieldBox } from '../components/FieldBox';
import { AuthHeader } from '../components/AuthHeader';
import Eye from '../../assets/svg/eye.svg';
import Divider from '../../assets/svg/divider.svg';
import GoogleCircle from '../../assets/svg/google-circle.svg';
import { colors, fonts } from '../theme';
import { RootParamList } from '../navigation/routes';

const T = (size: number) => ({ fontSize: size, color: colors.onSurface, fontFamily: fonts.robotoExtraBold });

// Figma: "Login" (4:27)
export default function LoginScreen({ navigation }: NativeStackScreenProps<RootParamList, 'Login'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  return (
    <DesignCanvas>
      <ScreenBackground />
      <AuthHeader />

      <Text style={{ position: 'absolute', left: 145.5, top: 261, width: 80, ...T(24) }}>Log In</Text>

      <FieldBox left={48} top={307} placeholder="Email Address:" value={email} onChangeText={setEmail} />
      <FieldBox
        left={48} top={364} placeholder="Password:" value={password} onChangeText={setPassword} secure={!show}
        right={<Pressable onPress={() => setShow((s) => !s)} style={{ position: 'absolute', right: 5, top: 10 }}><Eye /></Pressable>}
      />

      <PillButton label="Log In" left={101} top={432} onPress={() => navigation.replace('SeekerHome')} />
      <Pressable onPress={() => navigation.navigate('ForgotPassword')} style={{ position: 'absolute', left: 134.5, top: 480, height: 18, justifyContent: 'center' }}>
        <Text style={T(11)}>Forgot password?</Text>
      </Pressable>

      <View style={{ position: 'absolute', left: 235, top: 544 }}><Divider /></View>
      <View style={{ position: 'absolute', left: 19, top: 544 }}><Divider /></View>
      <Text style={{ position: 'absolute', left: 139.5, top: 534, ...T(12) }}>Or Sign in with</Text>

      <View style={{ position: 'absolute', left: 165, top: 561 }}><GoogleCircle /></View>
      <Image source={require('../../assets/images/google.png')} resizeMode="cover" style={{ position: 'absolute', left: 171, top: 567, width: 18, height: 18 }} />

      <Pressable onPress={() => navigation.navigate('Signup')} style={{ position: 'absolute', left: 93.5, top: 600, width: 171, height: 38, justifyContent: 'center' }}>
        <Text style={{ ...T(12), fontFamily: fonts.interExtraBold }}>Don’t have an account? Sign Up</Text>
      </Pressable>
    </DesignCanvas>
  );
}
