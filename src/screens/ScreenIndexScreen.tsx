import React from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { colors, fonts } from '../theme';
import { authScreens, employerScreens, seekerScreens } from '../navigation/routes';

/** Dev index: jump to any screen in either role. Long-press the top-left corner of the Landing screen to open it. */
export default function ScreenIndexScreen({ navigation }: any) {
  const Section = ({ title, items }: { title: string; items: { name: string; title: string }[] }) => (
    <>
      <Text style={{ fontFamily: fonts.robotoExtraBold, fontSize: 16, color: colors.secondary, marginTop: 16 }}>{title}</Text>
      {items.map((s) => (
        <Pressable key={s.name} onPress={() => navigation.navigate(s.name)} style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderColor: colors.outlineVariant }}>
          <Text style={{ color: colors.onSurface }}>{s.title}</Text>
        </Pressable>
      ))}
    </>
  );
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 20 }}>
      <Section title="Auth" items={[{ name: 'Landing', title: 'Landing' }, { name: 'Login', title: 'Login' }, ...authScreens]} />
      <Section title="Job hunter" items={seekerScreens} />
      <Section title="Employer" items={employerScreens} />
    </ScrollView>
  );
}
