import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const MainVod = ({ mainVod, navigate }) => {
  return (
    <S.VodContainer>

      {mainVod.length > 0 && 
        <S.VodWrapper>
          <S.Vod1 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[0]._id}`)}>
            <img src={`http://localhost:8000${mainVod[0].thumbnail}`} />
          </S.Vod1>
          <S.VodRightSide>
            <S.Vod2 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[1]._id}`)}>
              <img src={`http://localhost:8000${mainVod[1].thumbnail}`} />
            </S.Vod2>
            <S.Vod2 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[2]._id}`)}>
              <img src={`http://localhost:8000${mainVod[2].thumbnail}`} />
            </S.Vod2>
          </S.VodRightSide>
        </S.VodWrapper>
      }

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