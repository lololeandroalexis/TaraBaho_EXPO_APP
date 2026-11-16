import React from 'react';
import { Text, View } from 'react-native';
import { colors, fonts } from '../theme';
import { ScreenDef } from '../navigation/routes';

/** Temporary stand-in until the screen is ported from its Figma node. */
export default function PlaceholderScreen({ def }: { def: ScreenDef }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, padding: 24 }}>
      <Text style={{ fontFamily: fonts.robotoExtraBold, fontSize: 20, color: colors.onSurface, textAlign: 'center' }}>{def.title}</Text>
      <Text style={{ marginTop: 8, color: colors.outline }}>Figma node {def.node} · not ported yet</Text>
    </View>
  );
}
