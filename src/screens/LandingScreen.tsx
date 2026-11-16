import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DesignCanvas } from '../components/DesignCanvas';
import { ScreenBackground } from '../components/ScreenBackground';
import { PillButton } from '../components/PillButton';
import Ellipse from '../../assets/svg/landing-ellipse.svg';
import { RootParamList } from '../navigation/routes';

// Figma: "Landing Page" (2:5)
export default function LandingScreen({ navigation }: NativeStackScreenProps<RootParamList, 'Landing'>) {
  return (
    <DesignCanvas>
      <ScreenBackground />
      {/* Ellipse 1 (4:108): 495x276 rotated 20° inside a 560x429 box */}
      <View style={{ position: 'absolute', left: -53.1, top: -202.86, width: 559.674, height: 428.702, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ transform: [{ rotate: '20deg' }] }}><Ellipse /></View>
      </View>
      <Image source={require('../../assets/images/landing-logo-icon.png')} resizeMode="contain" style={{ position: 'absolute', left: -65, top: 151, width: 487, height: 170 }} />
      <Image source={require('../../assets/images/landing-logo-word.png')} resizeMode="contain" style={{ position: 'absolute', left: -76, top: 336, width: 527, height: 107 }} />
      <PillButton label="Login" left={100.5} top={447} onPress={() => navigation.navigate('Login')} />
      <PillButton label="Sign Up" left={100.5} top={503} onPress={() => navigation.navigate('Signup')} />
      {/* dev helper: long-press the top-left corner to open the screen index */}
      <Pressable onLongPress={() => navigation.navigate('ScreenIndex')} style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48 }} />
    </DesignCanvas>
  );
}
