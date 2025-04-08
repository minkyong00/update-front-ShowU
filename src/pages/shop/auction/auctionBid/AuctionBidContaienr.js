import React from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';

const AuctionBidContaienr = ({ onClose, auctionProduct, bidCount }) => {
  //경매 입찰가격 입력 후 결제 전
  //이메일 인증 페이지
  //이메일 인증 후 입찰 추가
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>{auctionProduct.auctionName}</S.PopupTitle>
        <S.PopupContent>
          <p></p>
        </S.PopupContent>
        <S.BoxWrapper>
          <S.Box>
            <p>입찰금액 {bidCount}원</p>
          </S.Box>
        </S.BoxWrapper>

        <S.BidButton>
          <S.BackButton onClick={onClose}>취소</S.BackButton>
          <S.NextButton>신중하게 입찰하기</S.NextButton>
        </S.BidButton>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default AuctionBidContaienr;