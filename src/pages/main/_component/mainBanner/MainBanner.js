import React from 'react';
import S from './style';

const MainBanner = () => {
  return (
    <S.container>
      <S.Banner>

      </S.Banner>
      <S.NextPrevButtonBox>
        <S.NextPrevButton>&lt;</S.NextPrevButton>
        <div>1</div>
        <S.Bar>|</S.Bar>
        <div>2</div>
        <S.NextPrevButton>&gt;</S.NextPrevButton>
      </S.NextPrevButtonBox>
    </S.container>
  );
};

export default MainBanner;