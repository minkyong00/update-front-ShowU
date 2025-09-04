import styled from "styled-components";

const S = {};

  S.Outlet = styled.div`
    height: 110vh;
  `

  S.Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 600px;
    margin: 0 20%;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 50px;
  `

  S.PayDoneText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & svg.check {
      width: 50px;
      height: 50px;

      & path {
        color: #ffd400;
      }
    }

    & p {
      font-size: 20px;
    }
  `

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `

  S.ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & p:nth-child(1) {
      font-size: 15px;
      color: #ffd400;
    }

    & p:nth-child(2) {
      font-size: 16px;
    }
  `

  S.ToMyPayButton = styled.button`
    width: 800px;
    height: 50px;
    font-size: 16px;
    color: #000;
    background-color: #ffd400;
    border-radius: 30px;
    border: none;
    margin-top: 10px;
  `

export default S;