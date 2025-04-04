import React from 'react';
import S from './style';

const MainVod = () => {
  return (
    <S.VodContainer>

      <S.VodWrapper>
        <S.Vod1></S.Vod1>
        <S.VodRightSide>
          <S.Vod2></S.Vod2>
          <S.Vod3></S.Vod3>
        </S.VodRightSide>
      </S.VodWrapper>

      <S.MoreVodBox>
        <div>
          SHOWU VOD 더보기
        </div>
        <div>
          &gt;
        </div>
      </S.MoreVodBox>
    </S.VodContainer>
  );
};

export default MainVod;