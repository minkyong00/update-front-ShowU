import React, { useState } from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';
import emailjs from 'emailjs-com';
import EmailCode from './EmailCode';
import CreateBidCount from './CreateBidCount';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../../config.js';


const AuctionBidContaienr = ({ onClose, getAuctionDetail, bidCount }) => {
  // 파라미터 AuctionDetail
  const [ step, setStep ] = useState(1);
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ verificationCode, setVerificationCode ] = useState('');
  const [ createdCode, setCreatedCode ] = useState('');
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");


  const handleSendCode = () => {
    if (!email && !name) {
      alert('이름과 이메일을 입력해주세요.');
      return;
    }

    // 인증번호 생성
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setCreatedCode(code);

    emailjs.send(
      'service-showU',
      'template-showU',
      {
        to_name: name,
        to_email: email,
        code: code,
      },
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(() => {
        alert('인증번호가 이메일로 전송되었습니다!');
        setStep(2);
      })
      .catch((error) => {
        console.error('이메일 전송 실패:', error);
        alert('이메일 전송 중 오류가 발생했습니다.');
      });
  };

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (verificationCode === createdCode) {
      alert('인증이 성공하였습니다.');
      setStep(3); 
    } else {
      alert('인증번호가 일치하지 않습니다.');
    }
  };

  // 최종 입찰하기 핸들러
  const handleUpdateBid = () => {
    fetch(`${API_URL}/shop/auction/bid/${id}`, {
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
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        {/* <FontAwesomeIcon icon={faEnvelopeCircleCheck} />         */}
        
        {step === 1 && (
          <>
            <S.PopupTitle>이메일 주소 인증</S.PopupTitle>
            <hr />
            <S.PopupContent>
              <p>최종적으로 입찰하기 전에 이메일 인증을 완료해주세요</p>
            </S.PopupContent>
            <S.PopupWrapper>
              <p>인증할 이메일을 입력해주세요</p>
              <input 
                type='text'
                placeholder='이름'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type='email'
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.PopupWrapper>
          </>
        )}

        { step === 2 && (
          <EmailCode 
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            createdCode={createdCode}
            setStep={setStep}
          />
        )}

        { step === 3 && (
          <CreateBidCount 
            bidCount={bidCount} 
            onClose={onClose} 
            getAuctionDetail={getAuctionDetail} 
          />
        )}

        <S.BidButton>
          <S.BackButton onClick={onClose}>취소</S.BackButton>
          { step === 1 && (
            <S.EmailSendButton onClick={handleSendCode}>이메일 전송</S.EmailSendButton>
          )}
          { step === 2 && (
            <S.EmailSendButton onClick={handleVerifyCode}>인증번호 확인</S.EmailSendButton>
          )}
          { step === 3 && (
            <S.EmailSendButton onClick={handleUpdateBid}>최종 입찰하기</S.EmailSendButton>
          )}
          {/* <S.NextButton>이메일 인증하기</S.NextButton> */}
        </S.BidButton>

      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default AuctionBidContaienr;