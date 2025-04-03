import React from 'react';
import S from './style';

const MainIntro = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Ul>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>Team</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>md</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>경매</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>Vod</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>공간대여</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>티켓예매</li>
          </S.LiBox>
          <S.LiBox>
            <S.LiIcon>icon</S.LiIcon>
            <li>커뮤니티</li>
          </S.LiBox>
        </S.Ul>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainIntro;