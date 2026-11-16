import React from 'react';
import { Image, View } from 'react-native';
import { colors } from '../theme';

/** Green band + TARABAHO lockup used on Login / Signup / Forgot / Reset. */
export function AuthHeader({ height = 155, left = -1, top = -1 }: { height?: number; left?: number; top?: number }) {
  return (
    <>
      <View style={{ position: 'absolute', left, top, width: 360, height, backgroundColor: colors.primary }} />
      <Image source={require('../../assets/images/header-logo-word.png')} resizeMode="contain" style={{ position: 'absolute', left: 45, top: 100, width: 224, height: 55 }} />
      <Image source={require('../../assets/images/header-logo-icon.png')} resizeMode="contain" style={{ position: 'absolute', left: 269, top: 100, width: 46, height: 51 }} />
    </>
  );
}
