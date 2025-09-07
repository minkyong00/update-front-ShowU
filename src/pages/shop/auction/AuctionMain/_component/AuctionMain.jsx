import React, { useEffect, useState } from 'react';
import S from './styleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Timer from '../../AuctionDetail/_component/Timer';
import { API_URL } from '../../../../../config.js';

const AuctionMain = () => {
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [closingProductsAll, setClosingProductsAll] = useState([]);
  const [closingProducts, setClosingProducts] = useState([]);
  const [heartedProducts, setHeartedProducts] = useState([]); 
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const slideWidth = 1090; // 슬라이드 너비
  const [currentCategory, setCurrentCategory] = useState("전체"); // 현재 선택된 카테고리
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState(15);

  // console.log("closingProducts", closingProducts)

  useEffect(() => {
    const getAuctionProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/shop/auction`);

        if (!response.ok) {
          throw new Error(`서버 응답 오류: ${response.status}`);
        }

        const datas = await response.json();
        if (datas.length === 0) {
          console.log("데이터가 존재하지 않습니다.");
        } else {
          setAuctionProducts(datas);
          setFilteredProducts(datas);
        }
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuctionProducts();
  }, []);

  // 오늘 마감 슬라이드 
  const handleNext = () => {
    const totalSlides = Math.ceil(closingProductsAll.length / ProductsPerSlide);
    const nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  
    const nextStartIndex = nextSlide * ProductsPerSlide;
    setClosingProducts(
      closingProductsAll.slice(nextStartIndex, nextStartIndex + ProductsPerSlide)
    );
  };
  
  const handlePrev = () => {
    const totalSlides = Math.ceil(closingProductsAll.length / ProductsPerSlide);
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  
    const prevStartIndex = prevSlide * ProductsPerSlide;
    setClosingProducts(
      closingProductsAll.slice(prevStartIndex, prevStartIndex + ProductsPerSlide)
    );
  };
  
  
    // 하트 클릭 (카테고리 하단)
    const handleHeartClickCategory = (e, auctionId) => {
      e.preventDefault();
      e.stopPropagation();
    
      setAuctionProducts((prevProducts) =>
        prevProducts.map((auction) =>
          auction._id === auctionId
            ? { ...auction, ishearted: !auction.ishearted }
            : auction
        )
      );
    };

    
  // 하트 클릭 (오늘 마감 제품)
  const handleHeartClickClosing = (e, closingId) => {
    e.preventDefault();
    e.stopPropagation();

    setClosingProducts((prevProducts) =>
      prevProducts.map((closing) =>
        closing._id === closingId
          ? { ...closing, ishearted: !closing.ishearted }
          : closing
      )
    );
  };

    // 카테고리 변경
    const handleCategoryChange = (category) => {
      setCurrentCategory(category);
    };
  
    useEffect(() => {
      if (currentCategory === "전체") {
        setFilteredProducts(auctionProducts);
      } else {
        setFilteredProducts(
          auctionProducts.filter((product) => product.category === currentCategory)
        );
      }
    }, [auctionProducts, currentCategory]);

    const handleShowMore = () => {
      setShownProducts((prev) => prev + 15); // 더보기 버튼 클릭 시 15개씩 추가
    };
  

    //오늘 마감인 경매 상품 가져옴
    useEffect(() => {
      const getTodayEndProducts = async () => {
        try {
          const response = await fetch(`${API_URL}/shop/auction/today-end`);
  
          if (!response.ok) {
            throw new Error(`서버 응답 오류: ${response.status}`);
          }
  
          const datas = await response.json();
          if (datas.length === 0) {
            console.log("데이터가 존재하지 않습니다.");

          } else {
            setClosingProductsAll(datas)
            // 오늘 마감 제품은 초기화
            setClosingProducts(datas.slice(0, ProductsPerSlide)); // 초기 오늘 마감 제품
          }
        } catch (error) {
          console.error("AuctionMainTodayEndError", error);
        }
      };
  
      getTodayEndProducts();
    }, [])

    console.log("오늘 마감", closingProducts)
    
  

  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className='auction-title'>경매</h1>
        <FontAwesomeIcon icon={faChevronDown} className='icon1' />
      </S.MdTitle>

      {closingProducts.length > 0 && (
        <S.ClosingWrapper>
          <S.ClosingTitle>
            <h1 className='closing-title'>오늘 마감</h1>
          </S.ClosingTitle>
      
          <S.ClosingItems>
            {closingProductsAll.length > ProductsPerSlide && (
              <S.LeftIconWrapper onClick={handlePrev}>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
              </S.LeftIconWrapper>
            )}

            {/* 오늘 마감 상품 */}
            <S.ClosingListWrapper offset={-currentSlide * slideWidth}>
              {closingProducts.map((closing) => (
                <S.Closing key={closing._id}>
                  <Link to={`/shop/auction/detail/${closing._id}`}>
                    <div className="image-wrapper">
                      <img src={closing.image} alt={closing.image} className='image' />
                      <S.HeartIconWrapper
                        isHearted={closing.ishearted}
                        onClick={(e) => handleHeartClickClosing(e, closing._id)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </S.HeartIconWrapper>
                    </div>
                  </Link>
                  <div className='closing-category'>{closing.category}</div>
                  <div className='closing-name'>{closing.auctionName}</div>
                  <S.Closing2>
                    <div className='closing-number'>{closing.count}회 |</div>
                    <FontAwesomeIcon className='icon' icon={faClock} />
                    <div className='closing-time'>
                      <Timer endTime={closing.endTime} />
                    </div>
                  </S.Closing2>
                </S.Closing>
              ))}
            </S.ClosingListWrapper>
            
            {closingProductsAll.length > ProductsPerSlide && (
              <S.RightIconWrapper onClick={handleNext}>
                <FontAwesomeIcon icon={faCircleChevronRight} />
              </S.RightIconWrapper>
            )}

          </S.ClosingItems>
        </S.ClosingWrapper>
      )}

      <S.CategoryButtonWrapper>
        {["전체", "뮤지컬", "영화", "연극"].map((category) => (
          <S.CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            isActive={currentCategory === category}
          >
            {category}
          </S.CategoryButton>
        ))}
      </S.CategoryButtonWrapper>

      {/* 일반 경매 상품 */}
      <S.AuctionWrapper>
        <div className='auction-list'>
          {filteredProducts.slice(0, shownProducts).map((auction) => (
            <S.Auction key={auction._id}>
              <Link to={`/shop/auction/detail/${auction._id}`}>
                <div className="image-wrapper">
                  <img src={auction.image} alt={auction.image} className='image'/>
                  <S.HeartIconWrapper
                    isHearted={auction.ishearted}
                    onClick={(e) => handleHeartClickCategory(e, auction._id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </S.HeartIconWrapper>
                </div>
              </Link> 
              <div className='auction-category'>{auction.category}</div>
              <div className='auction-name'>{auction.auctionName}</div>
              <S.Closing2>
                <div className='closing-number'>{auction.count}회 |</div>
                <FontAwesomeIcon className='icon' icon={faClock} />
                <div className='closing-time'>
                  <Timer endTime={auction.endTime} />
                </div>
              </S.Closing2>
            </S.Auction>
          ))}
        </div>
      </S.AuctionWrapper>


      {auctionProducts.length > shownProducts && (
        <S.ButtonWrapper>
          <button onClick={handleShowMore}>
            <FontAwesomeIcon icon={faChevronRight} className="icon2" />
            경매 더보기
          </button>
        </S.ButtonWrapper>
      )}
    </S.MainWrapper>
  );
};

export default AuctionMain;
