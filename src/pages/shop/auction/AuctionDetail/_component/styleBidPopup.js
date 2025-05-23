// 경매 팝업 - 입찰 정보 스타일
import styled from "styled-components";

const S = {};

  S.PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(68, 68, 68, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `

  S.PopupContainer = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    width: 900px;
    height: 400px;
    border: 2px solid #ffd400;
  `

  S.PopupTitle = styled.h2`
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;
  `

  S.PopupContent = styled.div`
    padding: 20px;

    & p {
      font-size: 18px;
      text-align: center;
      /* margin: 20px; */
    }

    & span {
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
  `

  S.BoxWrapper = styled.div`
    display : flex;
    justify-content: center;
  `

  S.PopupWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 10px 20px 10px;
    gap: 10px;

    & input {
      width: 500px;
      height: 50px;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 30px;
    }
  `

  S.Box = styled.div`
    width: 800px;
    height: 50px;
    background-color: rgba(255, 212, 0, 0.8);
    border-radius: 5px;
    display: flex;
    align-items: center; 
    justify-content: center;
    border-radius: 30px;
    margin-bottom: 20px;

    & p {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
  `

  const buttonStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
  `;

  S.BidButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    gap: 20px;
  `

  S.BackButton = styled.button`
    /* ${buttonStyles} */
    width: 300px;
    height: 50px;
    background-color: #797979;
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 16px;
  `

  S.NextButton = styled.button`
    /* ${buttonStyles} */
    width: 300px;
    height: 50px;
    background-color: #ffd400;
    color: #000;
    border: none;
    border-radius: 30px;
    font-size: 16px;
  `

  S.EmailSendButton = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 30px;
    background-color: #ffd400;
    /* margin-top: 10px; */
    font-size: 16px;
  `

  S.LastContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
  `

export default S;