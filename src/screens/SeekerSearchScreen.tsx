import React from 'react';
import { DesignCanvas } from '../components/DesignCanvas';
import { InnerBg } from '../components/GradientBg';
import { SeekerBottomNav } from '../components/SeekerBottomNav';
import { Box, Ico, Img, Txt, C } from '../ui';
import BackCircle from '../../assets/svg/back-circle.svg';
import SearchIcon from '../../assets/svg/search.svg';
import Close from '../../assets/svg/close.svg';
import BookmarkFilled from '../../assets/svg/bookmark-filled.svg';

// Figma: "Search Bar" (132:8)
const recent = ['Construction Company', 'Restaurant', 'Barista'];
const views = [
  { y: 340, x: 22, img: require('../../assets/images/job-webdev.png'), title: 'Web App Developer', pay: 'Daily: ₱1,000 to 5,000.00 - 8 hours a day - Week Days ', blurb: 'A Web App Developer designs, builds, and maintains web applications. The job includes writing code, fixing errors, improving website features, and making sure the application works properly.', id: 'webdev' },
  { y: 454, x: 20, img: require('../../assets/images/job-barista.png'), title: 'Barista Worker', pay: 'Daily: ₱500.00 - 8 hours a day - Week Days ', blurb: 'A Barista prepares and serves coffee, tea, and other beverages. The job includes taking customer orders, keeping the workspace clean, and providing friendly customer service.', id: 'barista' },
  { y: 569, x: 20, img: require('../../assets/images/job-construction.png'), title: 'Construction Worker', pay: 'Daily: ₱550.00 - 8 hours a day - Week Days ', blurb: 'We are looking for a hardworking construction worker to help with building projects. The worker will assist with construction tasks, prepare materials, and maintain a clean and safe work area.', id: 'construction' },
];

export default function SeekerSearchScreen({ navigation }: any) {
  return (
    <DesignCanvas>
      <InnerBg />
      <Txt l={145} t={38} w={63} h={19} size={20} font="bold" color={C.onPrimary}>Search</Txt>
      <Ico l={9} t={31} Svg={BackCircle} onPress={() => navigation.goBack()} />

      <Box l={10} t={111} w={340} h={30} r={12} bc={C.outlineVariant} bw={0.7} bg="rgba(255,255,255,0.1)" sh>
        <Txt l={30} t={9} w={166} size={12}>Search for jobs</Txt>
        <Ico l={10} t={6.67} Svg={SearchIcon} />
      </Box>

      <Txt l={21} t={154} w={136} size={15} font="black">Recent Search</Txt>
      {recent.map((label, i) => (
        <React.Fragment key={label}>
          <Box l={32} t={180 + i * 31} w={295} h={23} r={16} bg="rgba(255,255,255,0.1)" sh />
          <Txt l={45} t={185 + i * 31} w={115} h={10} size={11} font="med" op={0.7}>{label}</Txt>
          <Ico l={305} t={187 + i * 31} Svg={Close} />
        </React.Fragment>
      ))}

      <Txt l={22} t={310} w={136} size={15} font="black">Recent View</Txt>
      {views.map((v, i) => (
        <Box key={v.id} l={v.x} t={v.y} w={318} h={96} r={12} bc={C.outlineVariant} bw={0.7} bg="rgba(255,255,255,0.1)" sh onPress={() => navigation.navigate('JobDetails', { id: v.id })}>
          {v.id === 'construction' ? (
            <>
              <Box l={11} t={13} w={107} h={66.56} r={10} bg={C.surfaceContainer} />
              <Box l={35.5} t={18.9} w={57.65} h={63} clip>
                <Img l={-57.65 * 0.6406} t={-63 * 0.5429} w={57.65 * 2.2344} h={63 * 2.0429} src={v.img} fit="stretch" />
              </Box>
            </>
          ) : (
            <Img l={11} t={13} w={107} h={71} r={10} src={v.img} />
          )}
          <Txt l={125} t={13} w={196} size={11} font="cond">{v.title}</Txt>
          <Txt l={127} t={25} w={219} size={8}>{v.pay}</Txt>
          <Txt l={127} t={40} w={180} size={8} op={0.7} align="justify">{v.blurb}</Txt>
          <Ico l={301} t={4} Svg={BookmarkFilled} />
        </Box>
      ))}

      <SeekerBottomNav navigation={navigation} active="home" dy={4} />
    </DesignCanvas>
  );
}
