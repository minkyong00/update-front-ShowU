// 경매 팝업 - 입찰 정보
import React, { useEffect, useState } from 'react';
import S from './styleBidPopup';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const BidPopup = ({ onClose, auctionProduct, bidCount }) => {
  const location = useLocation();
  // const { bidCount, auctionProduct } = location.state || {};
  const navigate = useNavigate();

  // console.log("bidCount", bidCount)

  const handleBid = () => {
    navigate('/shop/auction/payment', {
      state: { auctionProduct, bidCount } 
    });
  };


  // console.log("auctionProduct", auctionProduct)


  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>{auctionProduct.auctionName}</S.PopupTitle>
        <S.PopupContent>
          <p>
            <span>모든 입찰은 구속력이 있으며</span> 취소할 수 없고 최종적입니다.
            <span> 낙찰자인 경우 낙찰된 제품을 구매해야 </span>  할 의무가 있습니다.
          </p>
          <p> 
            계정 소유자로서 계정에서 이루어지는 모든 행동에 대한 책임은 회원님에게 있습니다.
          </p>
          <p>
            따라서 물품의 이미지 및 설명을 자세히 확인하시어 신중한 입찰 부탁드립니다.
          </p>
        </S.PopupContent>
        <S.BoxWrapper>
          <S.Box>
            <p>입찰금액 {bidCount}원</p>
          </S.Box>
        </S.BoxWrapper>

        <S.BidButton>
          <S.BackButton onClick={onClose}>취소</S.BackButton>
          <S.NextButton onClick={handleBid}>신중하게 입찰하기</S.NextButton>
        </S.BidButton>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default BidPopup;
