import React from 'react';
import { View, useWindowDimensions, StyleSheet, ScrollView } from 'react-native';
import { colors, DESIGN_W, DESIGN_H } from '../theme';

/** Renders children in the Figma 360x800 coordinate space, scaled to the device width. */
export function DesignCanvas({ children, height = DESIGN_H }: { children: React.ReactNode; height?: number }) {
  const { width } = useWindowDimensions();
  const scale = width / DESIGN_W;
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ height: height * scale }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={{ width: DESIGN_W, height, transform: [{ translateX: -(DESIGN_W - width) / 2 }, { translateY: -(height - height * scale) / 2 }, { scale }] }}>
        {children}
      </View>
    </ScrollView>
  );
}

export const abs = StyleSheet.create({ fill: { position: 'absolute', left: 0, top: 0, width: DESIGN_W, height: DESIGN_H } });
