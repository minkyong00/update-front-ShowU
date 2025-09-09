import React, { useEffect, useState } from 'react';
import S from './style';
import MainVod from './MainVod';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../../config.js';

const MainVodContainer = () => {
  const [ mainVod, setMainVod ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMainVod = async () => {
      try {
        const response = await fetch(`${API_URL}/my/main/vod`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (!res.mainVodSuccess) {
          console.log(res.message);
        } else {
          setMainVod(res.vodList); 
        }
      } catch (error) {
        console.error("main getVod error", error);
      }
    }

    getMainVod(); 
  }, [])

  // console.log("mainVod", mainVod)

  return (
    <div>
      <S.BackgroudhalfBox>
        <S.BackgroudColorWhite>
          <S.Title>
            SHOWU VOD
          </S.Title>
        </S.BackgroudColorWhite>
        <S.BackgroudColorGary>
          <MainVod mainVod={mainVod} navigate={navigate} />
        </S.BackgroudColorGary>
    </S.BackgroudhalfBox>
    </div>
  );
};

export default MainVodContainer;