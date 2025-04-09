import React, { useState } from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';
import emailjs from 'emailjs-com';
import EmailCode from './EmailCode';
import CreateBidCount from './CreateBidCount';


const AuctionBidContaienr = ({ onClose, auctionProduct, bidCount }) => {
  const [step, setStep] = useState(1);
  const [ email, setEmail ] = useState('');
  const [name, setName] = useState('');
  const [ verificationCode, setVerificationCode ] = useState('');
  const [ createdCode, setCreatedCode ] = useState('');


  const handleSendCode = () => {
    if (!email) {
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

  // 경매 입찰 시 auction 컬렉션 배열로 저장
  // 최근 경매가 페이지네이션 swiper
  // 남은 시간 타이머
  // node-schedule //https://velog.io/@skh9797/%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B2%BD%EB%A7%A4-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0
  //마감기한 지나면 가장 높은 금액이 낙찰된 사용자에게 결제 요청 이메일 전송
  //낙찰된 사용자의 마이페이지에서 결제 대기 페이지 추가
  //결제 토스페이 사용
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
              <button onClick={handleSendCode}>이메일 전송</button>
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
          <CreateBidCount bidCount={bidCount} />
        )}

        <S.BidButton>
          <S.BackButton onClick={onClose}>취소</S.BackButton>
          {/* <S.NextButton>이메일 인증하기</S.NextButton> */}
        </S.BidButton>

      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default AuctionBidContaienr;