import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { DesignCanvas } from '../components/DesignCanvas';
import { ScreenBackground } from '../components/ScreenBackground';
import { AuthHeader } from '../components/AuthHeader';
import { PillButton } from '../components/PillButton';
import { FieldBox } from '../components/FieldBox';
import Eye from '../../assets/svg/eye.svg';
import Person from '../../assets/svg/person.svg';
import Chevron from '../../assets/svg/chevron-down.svg';
import DropdownLine from '../../assets/svg/dropdown-line.svg';
import Divider from '../../assets/svg/divider.svg';
import GoogleCircle from '../../assets/svg/google-circle.svg';
import { colors, fonts, shadow } from '../theme';

const T = (size: number) => ({ fontSize: size, color: colors.onSurface, fontFamily: fonts.robotoExtraBold });
type Account = 'Job Seeker' | 'Employer';

// Figma: "Signup" (4:60) + dropdown state (454:20: "Job Seeker" / "Employer")
export default function SignupScreen({ navigation }: any) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);

  const eye = (on: boolean, toggle: () => void) => (
    <Pressable onPress={toggle} style={{ position: 'absolute', right: 5, top: 10 }}><Eye opacity={on ? 0.5 : 1} /></Pressable>
  );
  const submit = () => navigation.replace(account === 'Employer' ? 'EmployerHome' : 'SeekerHome', { name: first || undefined });

  return (
    <DesignCanvas>
      <ScreenBackground />
      <PillButton label="Sign Up" left={101} top={544} onPress={submit} />
      <Text style={{ position: 'absolute', left: 131.5, top: 155, width: 100, ...T(24) }}>Sign Up</Text>

      <FieldBox shadow left={47} top={201} placeholder="First Name:" value={first} onChangeText={setFirst} />
      <FieldBox shadow left={47} top={250} placeholder="Last Name:" value={last} onChangeText={setLast} />
      <FieldBox shadow left={47} top={299} placeholder="Email Address:" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <FieldBox shadow left={47} top={348} placeholder="Password:" value={pw} onChangeText={setPw} secure={!showPw} right={eye(showPw, () => setShowPw((s) => !s))} />
      <FieldBox shadow left={47} top={397} placeholder="Confirm Password:" value={pw2} onChangeText={setPw2} secure={!showPw2} right={eye(showPw2, () => setShowPw2((s) => !s))} />

      {/* Account Type selector (450:4) */}
      <Pressable onPress={() => setOpen((o) => !o)} style={[{ position: 'absolute', left: 48, top: 446, width: 264, height: 41, borderWidth: 1, borderColor: colors.outline, backgroundColor: 'rgba(255,255,255,0.1)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }, shadow]}>
        <View style={{ position: 'absolute', left: 7, top: 10 }}><Person /></View>
        <Text style={{ position: 'absolute', left: 27, top: 12, ...T(13) }}>{account ?? 'Account Type'}</Text>
        <View style={{ position: 'absolute', left: 237, top: 10, transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Chevron /></View>
      </Pressable>

      <Text style={{ position: 'absolute', left: 134.5, top: 608, width: 100, ...T(12) }}>Or Sign up with</Text>
      <View style={{ position: 'absolute', left: 231, top: 627 }}><Divider /></View>
      <View style={{ position: 'absolute', left: 21, top: 627 }}><Divider /></View>
      <View style={{ position: 'absolute', left: 165, top: 646 }}><GoogleCircle /></View>
      <Image source={require('../../assets/images/google.png')} resizeMode="cover" style={{ position: 'absolute', left: 171, top: 652, width: 18, height: 18 }} />

      <Pressable onPress={() => navigation.navigate('Login')} style={{ position: 'absolute', left: 82, top: 687, width: 193, height: 38, justifyContent: 'center' }}>
        <Text style={{ ...T(12), fontFamily: fonts.interExtraBold }}>Already have an account? Log In</Text>
      </Pressable>

      <AuthHeader left={-2} top={0} />

      {/* dropdown panel (Group 178) — drawn last so it overlays the button */}
      {open && (
        <View style={[{ position: 'absolute', left: 48, top: 487, width: 264, height: 70, borderRadius: 12, borderWidth: 0.7, borderColor: colors.outlineVariant, backgroundColor: '#eef5f2' }, shadow]}>
          <Pressable onPress={() => { setAccount('Job Seeker'); setOpen(false); }} style={{ height: 35, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ ...T(13), fontFamily: fonts.robotoRegular }}>Job Seeker</Text>
          </Pressable>
          <View style={{ position: 'absolute', left: 0, top: 35 }}><DropdownLine /></View>
          <Pressable onPress={() => { setAccount('Employer'); setOpen(false); }} style={{ height: 35, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ ...T(13), fontFamily: fonts.robotoRegular }}>Employer</Text>
          </Pressable>
        </View>
      )}
    </DesignCanvas>
  );
}
