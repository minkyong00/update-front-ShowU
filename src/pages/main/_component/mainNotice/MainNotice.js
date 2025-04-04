import React from 'react';
import S from './style';

const MainNotice = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.News>
          NEWS
        </S.News>
        <S.ContentBox>
          <S.Content>
            내용
          </S.Content>
          <S.Date>
            2025.02.01
          </S.Date>
        </S.ContentBox>
        <S.NextPrevButtonBox>
          <S.NextPrev>
            &lt;
          </S.NextPrev>
          <S.Bar>
            | 
          </S.Bar>
          <S.NextPrev>
            &gt;
          </S.NextPrev>
        </S.NextPrevButtonBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainNotice;