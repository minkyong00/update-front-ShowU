import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 1163px;
    height: 290px;
    margin: 0 auto;
  `

  S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
  `

  S.Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    width: 100%;
    height: 100%;
  `

  S.LiBox = styled.div`
    width: 100px;
    height: 140px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  `

  S.LiIcon = styled.div`
    width: 100px;
    height: 100px;
    padding: 35px;
    background-color: #EFF0F2;
    border-radius: 30px;
  `

export default S;