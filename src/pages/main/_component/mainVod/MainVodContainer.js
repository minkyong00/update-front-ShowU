import React from 'react';
import S from './style';
import MainVod from './MainVod';

const MainVodContainer = () => {
  return (
    <div>
      <S.BackgroudhalfBox>
        <S.BackgroudColorWhite>
          <S.Title>
            SHOWU VOD
          </S.Title>
        </S.BackgroudColorWhite>
        <S.BackgroudColorGary>
          <MainVod />
        </S.BackgroudColorGary>
    </S.BackgroudhalfBox>
    </div>
  );
};

export default MainVodContainer;