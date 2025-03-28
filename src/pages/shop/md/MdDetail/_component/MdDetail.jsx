import React, { useEffect, useState } from "react";
import S from "./styleDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const MdDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // 기본 수량 1개
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user); // Redux에서 currentUser 가져오기

  useEffect(() => {
    const getMdDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/shop/md/detail/${id}`
        );
        const datas = await response.json();
        setProduct(datas);
      } catch (error) {
        console.error("MdDetailError", error);
      }
    };

    getMdDetail();
  }, [id]);

  // 수량 감소
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // 수량 증가
  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    } else {
      alert("수량은 최대 5개까지 선택 가능합니다.");
    }
  };

  // 카트 추가
  const addToCart = async (e) => {
    try {
      const response = await fetch("http://localhost:8000/shop/md/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product, quantity }),
      });

      if (response.ok) {
        navigate("/shop/md/cart", { state: { product, quantity } });
      } else {
        alert("장바구니 추가에 실패했습니다.");
      }
    } catch (error) {
      console.error("장바구니 추가 실패:", error);
      alert("장바구니 추가에 실패했습니다.");
    }
  };

  // 바로 구매
  const purchase = (e) => {
    const confirmPurchase = window.confirm("결제 페이지로 이동하시겠습니까?");

    if (confirmPurchase) {
      console.log("Navigating to payment page with currentUser:", currentUser); // currentUser 로그 추가
      navigate("/shop/md/payment", {
        state: {
          product,
          quantity,
          name: product?.mdName,
          userId: currentUser?._id,
        }, // currentUser의 userId 추가
      });
    }
  };

  // 문의하기
  const sendInquiry = () => {
    const confirmInquiry = window.confirm("문의 등록을 하시겠습니까?");

    if (confirmInquiry) {
      navigate("/shop/md/inquiry", { state: { mdName: product.mdName } });
    } else {
      return;
    }
  };

  // 문의 내역
  const sendInquiryList = () => {
    navigate("shop/md/inquiry/list");
  };

  if (!product) {
    return <p>상품 정보를 불러오는 중...</p>; // product가 null일 때 로딩 메시지 출력
  }

    return (
      <S.Wrapper>
        <S.DetailContainer>
          <S.ImageWrapper>
            <img src={product.image} alt={product.name} />
          </S.ImageWrapper>

          <S.DetailWrapper>
            <S.MdTitle>
              <p>{product.category}</p>
              <p>{product.mdName}</p>
              <p>
                {product.price
                  ? product.price.toLocaleString()
                  : "가격 정보 없음"}
                원
              </p>
            </S.MdTitle>

            <S.Max>
              <FontAwesomeIcon icon={faCircleExclamation} className="icon1" />
              <p>각 옵션별로 최대 5개까지 구매 가능합니다.</p>
            </S.Max>

            <S.QuantityControl>
              <S.QuantityTitle>수량</S.QuantityTitle>
              <S.QuantityButton onClick={decreaseQuantity}>-</S.QuantityButton>
              <span>{quantity}</span>
              <S.QuantityButton onClick={increaseQuantity}>+</S.QuantityButton>
            </S.QuantityControl>

            {/* 카트 추가 버튼 */}
            <S.ButtonWrapper2>
              <div className="button-wrapper1">
                <button className="button cart" onClick={addToCart}>
                  <p>카트 추가</p>
                </button>

                {/* 바로 구매 버튼 */}
                <S.BuyButton onClick={purchase}>
                  <p>바로 구매</p>
                </S.BuyButton>
              </div>

              {/* 문의하기 버튼 */}
              <div className="button-wrapper1">
                <button className="button inquiry" onClick={sendInquiry}>
                  <p>문의하기</p>
                </button>

                {/* 문의 내역 버튼 */}
                <button className="button inquiry" onClick={sendInquiryList}>
                  <p>문의 내역</p>
                </button>
              </div>
            </S.ButtonWrapper2>
          </S.DetailWrapper>
        </S.DetailContainer>

        <S.MdInfo>
          <p className="description">상품 설명</p>
          <p>{product.description}</p>
          <S.ImageWrapper2>
            <img
              className="imagewrapper"
              src={product.imageDetail}
              alt="상세 이미지"
            />
          </S.ImageWrapper2>
          <S.ButtonWrapper3>
            <button>
              <FontAwesomeIcon icon={faChevronUp} className="icon2" />
              상세 정보 접기
            </button>
          </S.ButtonWrapper3>

          <S.Notice>
            <p className="notice">상품 고시정보</p>
            <tbody>
              <tr>
                <th>품명 / 모델명</th>
                <td>{product.mdName}</td>
              </tr>
              <tr>
                <th>제조자(사)</th>
                <td>showU</td>
              </tr>
              <tr>
                <th>제조국</th>
                <td>국산</td>
              </tr>
              <tr>
                <th>법에 의한 인증, 허가 등을 확인할 수 있는 경우</th>
                <td>해당 없음</td>
              </tr>
              <tr>
                <th>A/S 책임자와 전화번호</th>
                <td>showU 고객센터 : 1234-5678</td>
              </tr>
            </tbody>
          </S.Notice>

          <S.Return>
            <p className="return">반품/교환 정보</p>
            <p className="return2">반품/교환 가능 기간</p>
            <S.Content>
              <p>
                구매자는 상품을 수령한 날부터 7일 이내에 교환/반품 신청을 하여야
                하며,
              </p>
              <p>
                표시·광고 내용과 다르거나 계약 내용과 다르게 이행된 경우에는
                상품 수령 후 3개월 이내에 청약 철회가 가능합니다.
              </p>
              <p>(단, 변심의 경우 교환은 불가하며, 반품 취소만 가능합니다.)</p>
            </S.Content>
            <p className="return2">반품/교환 비용</p>
            <S.Content>
              <p>구매자의 변심으로 반품을 원할 경우에는 구매자가 배송비 지불</p>
              <p>
                상품 하자나 제품 불일치, 배송 이슈로 인한 반품의 경우에는
                판매자가 배송비 지불
              </p>
            </S.Content>
            <p className="return2">반품/교환 시 유의사항</p>
            <S.Content>
              <p>아래와 같은 경우 반품/교환이 제한될 수 있습니다.</p>
              <p>
                구매자에게 책임이 있는 사유로 상품이 멸실 또는 훼손된 경우(단,
                내용 확인을 위한 포장 개봉의 경우는 예외)
              </p>
            </S.Content>
            <p className="return2">소비자 피해 보상 및 환불지연에 따른 배상</p>
            <S.Content>
              <p>
                상품의 불량에 의한 반품, 교환, A/S, 환불, 품질보증 및 피해보상
                등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에
                준하여 처리됨.
              </p>
              <p>
                대금 환불 및 환불 지연에 따른 배상금 지급 조건, 절차 등은
                전자상거래 등에서의 소비자 보호에 관한 법률에 따라 처리됨.
              </p>
            </S.Content>
          </S.Return>
        </S.MdInfo>
      </S.Wrapper>
    );

};

export default MdDetail;


