import React from 'react';
import S from './style';

const MainBanner = () => {
  return (
    <S.container>
      <S.Banner>
        <S.Ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/main/banner1.png"} alt='banner1'/>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/main/banner2.png"} alt='banner2'/>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/main/banner3.png"} alt='banner3'/>
          </li>
        </S.Ul>
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