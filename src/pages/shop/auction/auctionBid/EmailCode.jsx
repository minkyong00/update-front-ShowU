import React from 'react';
import S from '../AuctionDetail/_component/styleBidPopup';

const EmailCode = ({ verificationCode, setVerificationCode, createdCode, setStep }) => {

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (verificationCode === createdCode) {
      alert('인증이 성공하였습니다.');
      setStep(3); 
    } else {
      alert('인증번호가 일치하지 않습니다.');
    }
  };


  return (
    <>
      <S.PopupTitle>인증번호 확인</S.PopupTitle>
        <hr />
        <S.PopupContent>
          <p>최종적으로 입찰하기 전에 이메일 인증을 완료해주세요</p>
        </S.PopupContent>
        <S.PopupWrapper>
        <p>인증할 이메일을 입력해주세요</p>
        <input 
          type='text'
          placeholder='인증번호'
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button onClick={handleVerifyCode}>인증번호 확인</button>
      </S.PopupWrapper>
    </>
  );
};

export default EmailCode;