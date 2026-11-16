import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View, ViewStyle } from 'react-native';
import { colors, fonts, shadow as shadowStyle } from '../theme';

// Tiny absolute-positioning kit: every value is a Figma pixel value in the 360x800 frame.
export const C = { ...colors, white: '#ffffff', black: '#000000' };
const F: Record<string, string> = { reg: fonts.robotoRegular, med: fonts.robotoMedium, bold: fonts.robotoBold, xbold: fonts.robotoExtraBold, black: fonts.robotoBlack, cond: fonts.condensedExtraBold, inter: fonts.interExtraBold };

type Pos = { l?: number; t?: number; w?: number; h?: number; r?: number; op?: number };
const pos = (p: Pos): ViewStyle => ({ position: 'absolute', left: p.l, top: p.t, width: p.w, height: p.h, opacity: p.op });

export function Box({ l, t, w, h, r, bg, bc, bw, sh, op, clip, children, onPress, style }: Pos & { bg?: string; bc?: string; bw?: number; sh?: boolean; clip?: boolean; children?: React.ReactNode; onPress?: () => void; style?: ViewStyle }) {
  const s: ViewStyle = { ...pos({ l, t, w, h, op }), borderRadius: r, backgroundColor: bg, borderColor: bc, borderWidth: bc ? bw ?? 1 : 0, overflow: clip ? 'hidden' : undefined, ...(sh ? shadowStyle : null), ...style };
  return onPress ? <Pressable onPress={onPress} style={s}>{children}</Pressable> : <View style={s}>{children}</View>;
}

export function Txt({ l, t, w, h, size = 12, font = 'reg', color = C.onSurface, align, lh, op, lines, onPress, children, style }: Pos & { size?: number; font?: keyof typeof F; color?: string; align?: 'left' | 'center' | 'right' | 'justify'; lh?: number; lines?: number; onPress?: () => void; children?: React.ReactNode; style?: any }) {
  const el = (
    <Text numberOfLines={lines} style={[{ fontSize: size, fontFamily: F[font], color, textAlign: align, lineHeight: lh, ...pos({ l, t, w, h, op }) }, onPress ? { } : null, style]}>{children}</Text>
  );
  return onPress ? <Pressable onPress={onPress} style={{ position: 'absolute', left: l, top: t, width: w, height: h }}>{React.cloneElement(el, { style: [{ fontSize: size, fontFamily: F[font], color, textAlign: align, lineHeight: lh, opacity: op }, style] })}</Pressable> : el;
}

export function Img({ l, t, w, h, src, fit = 'cover', r, op, onPress }: Pos & { src: ImageSourcePropType; fit?: 'cover' | 'contain' | 'stretch'; onPress?: () => void }) {
  const el = <Image source={src} resizeMode={fit} style={{ ...(pos({ l, t, w, h, op }) as any), borderRadius: r }} />;
  return onPress ? <Pressable onPress={onPress} style={{ position: 'absolute', left: l, top: t, width: w, height: h }}><Image source={src} resizeMode={fit} style={{ width: w, height: h, borderRadius: r }} /></Pressable> : el;
}

/** Place an imported .svg (its own width/height attributes apply) at (l,t). */
export function Ico({ l, t, Svg, op, rot, onPress }: { l: number; t: number; Svg: React.FC<any>; op?: number; rot?: number; onPress?: () => void }) {
  const inner = <View style={{ transform: rot ? [{ rotate: `${rot}deg` }] : undefined, opacity: op }}><Svg /></View>;
  return onPress ? <Pressable onPress={onPress} style={{ position: 'absolute', left: l, top: t }}>{inner}</Pressable> : <View style={{ position: 'absolute', left: l, top: t }}>{inner}</View>;
}

/** Invisible tap target. */
export const Hit = ({ l, t, w, h, onPress }: { l: number; t: number; w: number; h: number; onPress: () => void }) => (
  <Pressable onPress={onPress} style={{ position: 'absolute', left: l, top: t, width: w, height: h }} />
);

/** Horizontal rule (Figma "Line"): 1px high. */
export const Rule = ({ l, t, w, color = C.outlineVariant }: { l: number; t: number; w: number; color?: string }) => (
  <View style={{ position: 'absolute', left: l, top: t, width: w, height: 1, backgroundColor: color }} />
);
