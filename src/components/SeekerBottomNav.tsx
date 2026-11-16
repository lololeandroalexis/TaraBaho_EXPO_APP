import React from 'react';
import { Pressable, View } from 'react-native';
import NavHome from '../../assets/svg/nav-home.svg';
import NavJobs from '../../assets/svg/nav-jobs.svg';
import NavMail from '../../assets/svg/nav-mail.svg';
import NavMenu from '../../assets/svg/nav-menu.svg';
import NavActive from '../../assets/svg/nav-active.svg';
import { colors } from '../theme';

/** Bottom bar from Home (248:77): 360x56 at y=744, primary @ 80%. */
export function SeekerBottomNav({ navigation, active = 'home', dy = 0 }: { navigation: any; active?: 'home' | 'jobs' | 'mail' | 'menu'; dy?: number }) {
  const items = [
    { key: 'home', left: 41.5, w: 32, h: 30, Icon: NavHome, go: () => navigation.navigate('SeekerHome') },
    { key: 'jobs', left: 123.5, w: 30, h: 30, Icon: NavJobs, go: () => navigation.navigate('MyApplications') },
    { key: 'mail', left: 203.5, w: 30, h: 30, Icon: NavMail, go: () => navigation.navigate('SeekerMessages') },
    { key: 'menu', left: 283.5, w: 30, h: 30, Icon: NavMenu, go: () => navigation.navigate('SeekerMenu') },
  ] as const;
  return (
    <>
      <View style={{ position: 'absolute', left: 0, top: 744 + dy, width: 360, height: 56, backgroundColor: colors.primary, opacity: 0.8 }} />
      {active === 'home' && <View style={{ position: 'absolute', left: 37, top: 755 + dy }}><NavActive /></View>}
      {items.map(({ key, left, w, h, Icon, go }) => (
        <Pressable key={key} onPress={go} style={{ position: 'absolute', left, top: 756 + dy, width: w, height: h }}>
          <Icon />
        </Pressable>
      ))}
    </>
  );
}
