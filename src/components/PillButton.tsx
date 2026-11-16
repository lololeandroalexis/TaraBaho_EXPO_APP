import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, fonts } from '../theme';

/** 158x48 rounded button used across the auth flow (radius 20, secondary fill). */
export function PillButton({ label, left, top, onPress }: { label: string; left: number; top: number; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        position: 'absolute', left, top, width: 158, height: 48, borderRadius: 20,
        backgroundColor: colors.secondary, borderWidth: 0.7, borderColor: colors.outlineVariant,
        alignItems: 'center', justifyContent: 'center', opacity: pressed ? 0.85 : 1,
      })}
    >
      <Text numberOfLines={1} style={{ color: colors.onSecondary, fontSize: 14, fontFamily: fonts.robotoExtraBold }}>{label}</Text>
    </Pressable>
  );
}
