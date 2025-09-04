import React, { useState } from 'react';
import S from './style';
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y, Navigation } from "swiper/modules";

const MainBanner = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState();

  // 이전 슬라이드 버튼 핸들러
  const prevButton = () => {
    swiper?.slidePrev()
  }

  // 다음 슬라이드 버튼 핸들러
  const nextButton = () => {
    swiper?.slideNext()
  }


  

  return (
    <S.container>
      <S.Banner>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10} //슬라이스 간격을 50px 지정
          slidesPerView={1} //한번에 보여질 슬라이드 수를 1로 지정
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 슬라이드 간의 지연 시간 (밀리초 단위)
            disableOnInteraction: false, // 사용자가 슬라이드를 건드린 후에도 자동 재생 계속
          }}
          onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)}
          onSwiper={(e) => {setSwiper(e)}}
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/main/banner1.png"} alt='banner1'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/main/banner2.png"} alt='banner2'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/main/banner3.png"} alt='banner1'/>
          </SwiperSlide>
        </Swiper>
      </S.Banner>

      {/* 슬라이드 버튼 */}
      <S.NextPrevButtonBox>
        <S.NextPrevButton onClick={prevButton}>&lt;</S.NextPrevButton>
        <div>{swiperIndex + 1}</div>
        <S.Bar>|</S.Bar>
        <div>3</div>
        <S.NextPrevButton onClick={nextButton}>&gt;</S.NextPrevButton>
      </S.NextPrevButtonBox>
    </S.container>
  );
};

export default MainBanner;