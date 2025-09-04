import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const MainNotice = () => {
  const [newsList, setNewsList] = useState([]); //뉴스목록
  const [currentIndex, setCurrentIndex] = useState(0); //뉴스 인덱스

  useEffect(() => {
    const getNewsList = async () => {
      try {
        const response = await fetch(`http://localhost:8000/community/newsMain/`);
        const data = await response.json();
        setNewsList(data)
      } catch (error) {
        console.error("메인페이지 뉴스 목록 에러", error);
      }
    }

    getNewsList();

  }, [])

  // console.log("newsList", newsList)

  // 다음 뉴스보기
  const nextNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsList.length);
  }

  const prevNews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsList.length - 1 : prevIndex - 1
    )
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.News>
          <Link to={'/community/newsMain'}>NEWS</Link>
        </S.News>
        
        {newsList.length > 0 && 
          <S.ContentBox>
            <S.Content>
              {newsList[currentIndex].title}
            </S.Content>
            {/* <S.Date>
              2025.02.01
            </S.Date> */}
          </S.ContentBox>}

        <S.NextPrevButtonBox>
          <S.NextPrev onClick={prevNews}>
            &lt;
          </S.NextPrev>
          <S.Bar>
            | 
          </S.Bar>
          <S.NextPrev onClick={nextNews}>
            &gt;
          </S.NextPrev>
        </S.NextPrevButtonBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainNotice;