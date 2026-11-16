import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Bookmark from '../../assets/svg/bookmark.svg';
import { colors, fonts, shadow } from '../theme';
import { Job } from '../data/jobs';

/** 320x68 featured-job card from Home (79:242). */
export function JobCard({ job, onPress }: { job: Job; onPress?: () => void }) {
  const ink = job.dark ? colors.onPrimary : colors.onSurface;
  return (
    <Pressable onPress={onPress} style={[{ width: 320, height: 68, borderRadius: 12, borderWidth: 0.7, borderColor: colors.outlineVariant, backgroundColor: job.dark ? colors.surfaceContainerLowest : 'rgba(255,255,255,0.1)' }, shadow]}>
      <View style={{ position: 'absolute', left: 7, top: 6, width: 85, height: 57, borderRadius: 10, overflow: 'hidden', backgroundColor: job.imageKind === 'construction' ? colors.surfaceContainer : undefined }}>
        {job.imageKind === 'tall' && <Image source={job.image} style={{ width: 85, height: 57 * 1.0984 }} resizeMode="stretch" />}
        {job.imageKind === 'wide' && <Image source={job.image} style={{ width: 85, height: 57 * 1.0185 }} resizeMode="stretch" />}
        {job.imageKind === 'cover' && <Image source={job.image} style={{ width: 85, height: 57 }} resizeMode="cover" />}
        {job.imageKind === 'construction' && (
          <View style={{ position: 'absolute', left: 18.22, top: 0.5, width: 51.655, height: 56.498, overflow: 'hidden', borderRadius: 10 }}>
            <Image source={job.image} style={{ position: 'absolute', width: 51.655 * 2.2344, height: 56.498 * 2.0429, left: -51.655 * 0.6406, top: -56.498 * 0.5429 }} />
          </View>
        )}
      </View>
      <Text numberOfLines={1} style={{ position: 'absolute', left: 101, top: 12, width: 190, fontSize: 11, color: ink, fontFamily: fonts.condensedExtraBold }}>{job.title.trim()}</Text>
      <View style={{ position: 'absolute', left: 294, top: 6 }}><Bookmark /></View>
      <Text style={{ position: 'absolute', left: 101, top: 25, width: 219, fontSize: 11, lineHeight: 13.2, color: ink, fontFamily: fonts.robotoRegular }}>{job.pay.trim()}</Text>
      <Text numberOfLines={2} style={{ position: 'absolute', left: 106, top: 39, width: 203, height: 21, fontSize: 8, color: colors.onSurface, opacity: 0.7, textAlign: 'justify', fontFamily: fonts.robotoRegular }}>{job.blurb}</Text>
    </Pressable>
  );
}
