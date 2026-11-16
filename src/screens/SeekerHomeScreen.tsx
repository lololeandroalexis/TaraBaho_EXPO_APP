import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DesignCanvas } from '../components/DesignCanvas';
import { SeekerBottomNav } from '../components/SeekerBottomNav';
import { JobCard } from '../components/JobCard';
import { featuredJobs } from '../data/jobs';
import SearchIcon from '../../assets/svg/search.svg';
import Bell from '../../assets/svg/bell.svg';
import ChipAll from '../../assets/svg/chip-all.svg';
import ChipRemote from '../../assets/svg/chip-remote.svg';
import ChipOnsite from '../../assets/svg/chip-onsite.svg';
import ChipFull from '../../assets/svg/chip-fulltime.svg';
import ChipPart from '../../assets/svg/chip-parttime.svg';
import { colors, fonts } from '../theme';

const chips = [
  { label: 'All Jobs', left: 37, w: 47, r: 12, bg: colors.surfaceContainerLowest, iconLeft: 46, iconW: 27, labelLeft: 44, size: 9, Icon: ChipAll },
  { label: 'Remote', left: 96, w: 48, r: 12, bg: '#ffffff', iconLeft: 106, iconW: 29, labelLeft: 105, size: 11, Icon: ChipRemote },
  { label: 'On-site', left: 156, w: 48, r: 12, bg: '#ffffff', iconLeft: 166, iconW: 28, labelLeft: 166, size: 11, Icon: ChipOnsite },
  { label: 'Full-time', left: 216, w: 48, r: 10, bg: colors.tertiaryContainer, iconLeft: 225, iconW: 29, labelLeft: 222, size: 9, Icon: ChipFull },
  { label: 'Part-time', left: 276, w: 47, r: 10, bg: colors.errorContainer, iconLeft: 286, iconW: 27, labelLeft: 281, size: 9, Icon: ChipPart },
];

// Figma: "Home Page 1.1" (79:4) — job hunter
export default function SeekerHomeScreen({ navigation, route }: any) {
  const name = route?.params?.name ?? 'Leandro';
  return (
    <DesignCanvas>
      <LinearGradient colors={[colors.background, colors.surfaceContainer, colors.primaryContainer]} locations={[0, 0.62, 1]} style={{ position: 'absolute', left: -17, top: -2, width: 387, height: 816, borderWidth: 1, borderColor: 'rgba(255,255,255,0.84)' }} />
      <View style={{ position: 'absolute', left: 0, top: -2, width: 360, height: 100, backgroundColor: colors.primary }} />

      <Image source={require('../../assets/images/home-logo-word.png')} resizeMode="contain" style={{ position: 'absolute', left: 15, top: 22, width: 107.25, height: 26 }} />
      <Image source={require('../../assets/images/home-logo-icon.png')} resizeMode="contain" style={{ position: 'absolute', left: 121.17, top: 23.08, width: 22.071, height: 24.47 }} />
      <Pressable onPress={() => navigation.navigate('SeekerNotifications')} style={{ position: 'absolute', left: 285, top: 19, width: 31, height: 29 }}><Bell /></Pressable>
      <Pressable onPress={() => navigation.navigate('SeekerProfile')} style={{ position: 'absolute', left: 319, top: 21, width: 24, height: 25 }}>
        <Image source={require('../../assets/images/avatar.png')} style={{ width: 24, height: 25 }} />
      </Pressable>

      {/* hero banner (238:5) */}
      <View style={{ position: 'absolute', left: 10, top: 54, width: 340, height: 107, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={require('../../assets/images/home-banner.png')} style={{ position: 'absolute', width: 340 * 1.1042, height: 107 * 1.1649, left: -340 * 0.0537, top: -107 * 0.0619 }} />
      </View>
      <Text style={{ position: 'absolute', left: 30, top: 70, fontSize: 16, color: colors.onPrimary, fontFamily: fonts.robotoBold }}>{`Hi, ${name}!`}</Text>
      <Text style={{ position: 'absolute', left: 30, top: 91, width: 105, fontSize: 10, color: colors.onSurface, fontFamily: fonts.robotoRegular }}>Your next opportunity is just a search away.</Text>

      {/* search bar (79:17) */}
      <Pressable onPress={() => navigation.navigate('SeekerSearch')} style={{ position: 'absolute', left: 10, top: 170, width: 340, height: 30, borderRadius: 12, borderWidth: 0.7, borderColor: colors.outlineVariant, backgroundColor: colors.surfaceContainerLowest }}>
        <View style={{ position: 'absolute', left: 10, top: 6.67 }}><SearchIcon /></View>
        <Text style={{ position: 'absolute', left: 30, top: 8, fontSize: 12, color: colors.onSurface, fontFamily: fonts.robotoRegular }}>Search for jobs</Text>
      </Pressable>

      {/* category chips (239:63) */}
      {chips.map(({ label, left, w, r, bg, iconLeft, iconW, labelLeft, size, Icon }) => (
        <Pressable key={label} onPress={() => navigation.navigate('AllJobs', { filter: label })} style={{ position: 'absolute', left: 0, top: 210, width: 360, height: 50 }}>
          <View style={{ position: 'absolute', left, top: 0, width: w, height: 30, borderRadius: r, borderWidth: 0.7, borderColor: colors.outlineVariant, backgroundColor: bg }} />
          <View style={{ position: 'absolute', left: iconLeft, top: 1, width: iconW, height: 28 }}><Icon /></View>
          <Text style={{ position: 'absolute', left: labelLeft, top: 32, width: 44, fontSize: size, color: colors.onSurface, fontFamily: fonts.robotoBold }}>{label}</Text>
        </Pressable>
      ))}

      <Text style={{ position: 'absolute', left: 18, top: 267, fontSize: 13, color: colors.onSurface, fontFamily: fonts.robotoBlack }}>Featured Jobs</Text>
      <Pressable onPress={() => navigation.navigate('AllJobs')} style={{ position: 'absolute', left: 303, top: 269 }}>
        <Text style={{ fontSize: 11, color: colors.onSurface, fontFamily: fonts.robotoExtraBold }}>See all</Text>
      </Pressable>

      {/* scrollable list (61:457) */}
      <ScrollView style={{ position: 'absolute', left: 21, top: 292, width: 320, height: 453 }} contentContainerStyle={{ gap: 10, paddingBottom: 8 }} showsVerticalScrollIndicator={false} nestedScrollEnabled>
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} onPress={() => navigation.navigate('JobDetails', { id: job.id })} />
        ))}
      </ScrollView>

      <SeekerBottomNav navigation={navigation} active="home" />
    </DesignCanvas>
  );
}
