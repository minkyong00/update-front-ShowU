// 최종 입찰 확인 후 입찰하는 페이지
import React from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateBidCount = ({ bidCount, onClose, getAuctionDetail }) => {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");


  // 최종 입찰하기 핸들러
  const handleUpdateBid = () => {
    fetch(`http://localhost:8000/shop/auction/bid/${id}`, {
      method : "PUT",
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body : JSON.stringify({ 
        userId : currentUser._id,
        price : bidCount
      }),
    })
      .then(async (res) => {
        const data = await res.json();

        if(!res.ok){
          console.log("입찰 실패")
          console.log(data.message)
          alert(data.message)
          onClose(true) //모달창 닫기
        } else {
          console.log("입찰 성공")
          alert(data.message)
          console.log(data.message)
          onClose(true) //모달창 닫기
          getAuctionDetail()
        }
      })
      .catch((error) => {
        console.error("입찰 중 실패", error)
      })
  }



  return (
    <>
      <S.PopupTitle>입찰</S.PopupTitle>
      <hr />
      <S.PopupContent>
        <p>최종적으로 {bidCount}원으로 입찰하시겠습니까?</p>
        <p>경매가 마감되고 사용자가 낙찰될 시 이메일으로 결제 요청 이메일이 전송됩니다.</p>
      </S.PopupContent>
      <S.PopupWrapper>
        <div onClick={handleUpdateBid}>최종 입찰하기</div>
      </S.PopupWrapper>
    </>
  );
};

export default CreateBidCount;