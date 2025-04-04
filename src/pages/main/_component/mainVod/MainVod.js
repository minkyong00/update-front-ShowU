import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

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
          <Link to={'/vod/my-ShowU'}>SHOWU VOD 더보기</Link>
        </div>
        <div>
          &gt;
        </div>
      </S.MoreVodBox>
    </S.VodContainer>
  );
};

export default MainVod;