import React, { useState } from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';
import emailjs from 'emailjs-com';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailCode from './EmailCode';

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
      'kFcGXKs0UUkucev49'
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

  
  //경매 입찰가격 입력 후 결제 전
  //이메일 인증 페이지
  //이메일 인증 후 입찰 추가
  //node-cron
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
          <>
            <S.PopupTitle>입찰 완료</S.PopupTitle>
            <hr />
            <S.PopupContent>
              <p>최종적으로 {bidCount}원이 입찰이 완료되었습니다.</p>
              <p>경매가 마감되고 사용자가 낙찰될 시 이메일으로 결제 요청 이메일이 전송됩니다.</p>
            </S.PopupContent>
          </>
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