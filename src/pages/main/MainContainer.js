import React from 'react';
import MainBanner from './_component/mainBanner/MainBanner';
import MainChat from './_component/mainChat/MainChat';
import MainTeam from './_component/mainTeam/MainTeam';
import MainTalent from './_component/mainTalent/MainTalent';
import MainHot from './_component/mainHot/MainHot';
import MainOpen from './_component/mainOpen/MainOpen';
import MainIntro from './_component/mainIntro/MainIntro';
import MainNotice from './_component/mainNotice/MainNotice';
import MainVod from './_component/mainVod/MainVod';

const MainContainer = () => {
  return (
    <div>
      <MainBanner />
      {/* <MainLesson /> */}
      <MainIntro />
      <MainNotice />
      {/* <MainChat /> */}
      <MainTeam />
      <MainVod />
      {/* <MainTalent /> */}
      {/* <MainHot /> */}
      {/* <MainOpen /> */}
    </div>
  );
};

export default MainContainer;