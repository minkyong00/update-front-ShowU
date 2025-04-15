// 최종 입찰 확인 후 입찰하는 페이지
import React from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateBidCount = ({ bidCount, onClose, getAuctionDetail }) => {

  return (
    <>
      <S.PopupTitle>입찰</S.PopupTitle>
      <hr />
      <S.LastContainer>
        <S.PopupContent>
          <p>최종적으로 {bidCount}원으로 입찰하시겠습니까?</p>
          <p>경매가 마감되고 사용자가 낙찰될 시 이메일으로 결제 요청 이메일이 전송됩니다.</p>
        </S.PopupContent>
      </S.LastContainer>
    </>
  );
};

export default CreateBidCount;