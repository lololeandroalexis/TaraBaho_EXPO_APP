import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, DESIGN_W, DESIGN_H } from '../theme';

/** Figma "Rectangle 1": vertical gradient background → surface-container (62%) → primary-container */
export function ScreenBackground() {
  return (
    <LinearGradient
      colors={[colors.background, colors.surfaceContainer, colors.primaryContainer]}
      locations={[0, 0.62, 1]}
      style={{ position: 'absolute', left: -1, top: -1, width: DESIGN_W, height: DESIGN_H, borderWidth: 1, borderColor: 'rgba(255,255,255,0.84)' }}
    />
  );
}
