import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';
/** Inner-page background used from Home on (387x816, offset -17/-2) + 100px green top band. */
export function InnerBg({ band = 100 }: { band?: number }) {
  return (
    <>
      <LinearGradient colors={[colors.background, colors.surfaceContainer, colors.primaryContainer]} locations={[0, 0.62, 1]} style={{ position: 'absolute', left: -17, top: -2, width: 387, height: 816, borderWidth: 1, borderColor: 'rgba(255,255,255,0.84)' }} />
      <LinearGradient colors={[colors.primary, colors.primary]} style={{ position: 'absolute', left: 0, top: -2, width: 360, height: band }} />
    </>
  );
}
