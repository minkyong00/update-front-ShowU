import React, { useEffect, useState } from "react";
import S from "./styleDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChevronDown,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleExclamation,
  faClock,
  faHeart,
  faLock,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import DeliveryPopup from "./DeliveryPopup";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BidPopup from "./BidPopup";
import { useSelector } from "react-redux"; // Redux에서 currentUser 가져오기
import Timer from "./Timer";
import BidHistoryComponent from "./BidHistoryComponent";
import { API_URL } from "../../../../../config.js";

const AuctionDetail = () => {
  const { id } = useParams();
  const [PopupVisible1, setPopupVisible1] = useState(false);
  const [PopupVisible2, setPopupVisible2] = useState(false);
  const [auctionProduct, setAuctionProduct] = useState(null);
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user); // Redux에서 currentUser 가져오기
  const [bidCount, setBidCount] = useState(0); //사용자가 입력한 입찰가

  

  const openPopup1 = () => setPopupVisible1(true);
  const closePopup1 = () => setPopupVisible1(false);
  const openPopup2 = () => setPopupVisible2(true);
  const closePopup2 = () => setPopupVisible2(false);

  const visibleBestProduct =
    Array.isArray(auctionProducts) &&
    auctionProducts.slice(
      currentSlide * ProductsPerSlide,
      (currentSlide + 1) * ProductsPerSlide
    );

  useEffect(() => {
    const getAuctionProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/shop/auction`);
        const datas = await response.json();
        console.log("Auction products data:", datas); // 콘솔 로그 추가
        setAuctionProducts(datas);
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuctionProducts();
  }, []);

  const getAuctionDetail = async () => {
    try {
      const response = await fetch(
        `${API_URL}/shop/auction/detail/${id}`
      );
      const datas = await response.json();
      console.log("Auction detail data:", datas); // 콘솔 로그 추가
      setAuctionProduct(datas);
    } catch (error) {
      console.error("AuctionDetailError", error);
    }
  };

  useEffect(() => {

    getAuctionDetail();
  }, [id]);

  // console.log("auctionProduct", auctionProduct)

  // 바로 구매 함수 정의
  const purchase = () => {
    // const confirmPurchase = window.confirm("결제 페이지로 이동하시겠습니까?");

    // if (confirmPurchase) {
      // console.log("Navigating to payment page with currentUser:", currentUser); // currentUser 로그 추가
      // console.log("AuctionProduct data being passed:", auctionProduct); // auctionProduct 로그 추가
      navigate(`/shop/auction/bid/${id}`, {
        state: {
          bidCount : bidCount,
          auctionProduct : auctionProduct
        }, 
      });
    // }
  };

  if (!auctionProduct) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  if (auctionProducts.length === 0) {
    return <p>경매 상품이 없습니다. 잠시 후 다시 시도해주세요.</p>;
  }

  const maxSlideIndex = Math.floor(auctionProducts.length / ProductsPerSlide);
  if (currentSlide > maxSlideIndex) {
    setCurrentSlide(maxSlideIndex);
  }

  const sendInquiry = () => {
    const confirmInquiry = window.confirm("문의 등록을 하시겠습니까?");

    if (confirmInquiry) {
      navigate("/shop/md/inquiry", {
        state: { auctionName: auctionProduct.auctionName },
      });
    } else {
      return;
    }
  };

  const sendInquiryList = () => {
    navigate("shop/auction/inquiry/list");
  };

  const decreaseBid = () => {
    if (bidCount >= 1) {
      setBidCount(Number(bidCount) - 1);
    }
  };

  const increaseBid = () => {
    if (bidCount >= 0) {
      setBidCount(Number(bidCount) + 1);
    }
  };

  const onChangeBid = (e) => {
    setBidCount(e.target.value);

  }


  return (
    <S.DetailWrapper>
      <S.Title>
        <h1>{auctionProduct.auctionName}</h1>
      </S.Title>

      <S.AuctionWrapper>
        <S.Image src={`${process.env.PUBLIC_URL}${auctionProduct.image}`} alt="경매 상품" />
        <S.InfoRightBox>
          <S.Auction>
            <S.InfoContainer>
              <S.InfoWrapper>
                <S.InfoTitleBox>
                  <p className="auctionName">{auctionProduct.auctionName}</p>
                  <p className="category">{auctionProduct.category}</p>
                </S.InfoTitleBox>
                <S.InfoBidBox>
                  <p className="currentBidTitle">현재 입찰가</p>
                  <p className="currentBid">￦{auctionProduct.currentHighestBid}원</p>
                  <Timer endTime={auctionProduct.endTime} />
                </S.InfoBidBox>

                {/* 경매가 마감인 경우 입찰 input창 숨기기 */}
                { !auctionProduct.isClosed && (
                  <S.InfoInputBox>
                    <div className="w">￦</div>
                    <input
                      type="text"
                      value={bidCount}
                      onChange={onChangeBid}
                      placeholder="입찰하기"
                    ></input>
                    <S.UpDownButton>
                      <div onClick={increaseBid}>
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                      <div onClick={decreaseBid}>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </S.UpDownButton>
                  </S.InfoInputBox>
                 )}

              </S.InfoWrapper>
            </S.InfoContainer>
            <S.ButtonContainer>
                { !auctionProduct.isClosed && (
                  <div className="button-wrapper1">
                    <button className="button bid" onClick={openPopup1}>
                      <p>입찰하기</p>
                    </button>
                    <button className="button delivery" onClick={openPopup2}>
                      <p>배송 정보</p>
                    </button>
                  </div>
               )}
            </S.ButtonContainer>

            {/* 입찰하기 버튼 모달창 */}
            {PopupVisible1 && (
              <BidPopup
                title="입찰하기"
                onClose={closePopup1}
                // handleBid={handleBid}
                auctionProduct={auctionProduct}
                bidCount={bidCount}
                getAuctionDetail={getAuctionDetail}
              ></BidPopup>
            )}

            {/* 배송정보 버튼 모달창 */}
            {PopupVisible2 && (
              <DeliveryPopup
                title="배송 정보"
                onClose={closePopup2}
              ></DeliveryPopup>
            )}
          </S.Auction>

          {/* 최신 입찰가 기록 */}
            <S.BidHistoryBox>
              <BidHistoryComponent auctionProduct={auctionProduct} />
            </S.BidHistoryBox>

        </S.InfoRightBox>
      </S.AuctionWrapper>

      

      {/* <S.Info>
        <p>물품 정보</p>
        <tbody>
          <tr>
            <th>물품 크기</th>
            <td>0</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td>한국</td>
          </tr>
        </tbody>
      </S.Info> */}

      <S.Content>
        <p>{auctionProduct.description}</p>
      </S.Content>

      <S.ImageWrapper>
        <S.Image2
          className="content-image"
          src={`${process.env.PUBLIC_URL}${auctionProduct.imageDetail}`}
          alt="경매 상품"
        />
      </S.ImageWrapper>

      <S.Info>
        <p>반품 / 영수증</p>
      </S.Info>

      <S.Caution>
        <p className="caution">반품 시 주의 사항</p>
        <p>아래 각호의 경우에는 반품이 되지 않습니다.</p>
        <p>
          - 소비자의 책임 있는 사유로 상품 등이 멸실 / 훼손된 경우(단지 확인을
          위한 포장 훼손 제외)
        </p>
        <p>- 소비자의 사용 / 소비에 의해 상품 등의 가치가 현저히 감소한 경우</p>
      </S.Caution>

      <S.SellerWrapper>
        <S.Seller>
          <S.Box>
            <FontAwesomeIcon className="icon" icon={faCircleExclamation} />
          </S.Box>
          <p>판매자 정보</p>
        </S.Seller>
        <p>
          (주)showU에 등록된 상품과 상품내용은 개별 판매자가 등록한 것으로서,
          ㈜showU는 중개시스템만 제공하며 해당 등록내용에 대하여 일체의 책임을
          지지 않습니다.
        </p>
        <p>
          판매자가 사업자회원이 아닌 개인회원의 경우 판매자 정보는 [showU
          결제처리] 이후 판매자의 연락처 등을 구매한 소비자에게 즉시 제공하게
          됩니다.
        </p>
        <p className="service">구매안전서비스(KCP) 가입 업체 : A000000000000</p>
        <p>
          showU은 구매안전서비스(KCP)에 가입하였으며, showU에 등록된 모든 입점
          판매자는 자동적으로 해당 서비스에 가입하였습니다.{" "}
        </p>
      </S.SellerWrapper>
    </S.DetailWrapper>
  );
};

export default AuctionDetail;
