import React, { useEffect } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { API_URL } from '../../../../config.js';

const MainVod = ({ mainVod, navigate }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    })
  }, [])

  return (
    <S.VodContainer>

      {mainVod.length > 0 && 
        <S.VodWrapper data-aos="fade-up">
          <S.Vod1 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[0]._id}`)}>
            <img src={`${API_URL}${mainVod[0].thumbnail}`} />
            <div className='overlay'>
              <p>미친 바이올린 연주</p>
            </div>
          </S.Vod1>
          <S.VodRightSide>
            <S.Vod2 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[1]._id}`)}>
              <img src={`${API_URL}${mainVod[1].thumbnail}`} />
              <div className='overlay'>
                <p>환상적인 바이올린 연주</p>
            </div>
            </S.Vod2>
            <S.Vod2 onClick={() => navigate(`/vod/my-ShowU/video/${mainVod[2]._id}`)}>
              <img src={`${API_URL}${mainVod[2].thumbnail}`} />
              <div className='overlay'>
                <p>이거는 베이스연주</p>
              </div>
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