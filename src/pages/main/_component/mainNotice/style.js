import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    /* width: 1100px; */
    height: 90px;
    margin: 0 auto;
  `

  S.Wrapper = styled.div`
    height: 100%;
    background-color: #ffd400;
    padding: 0 220px;

    display: flex;
    align-items: center;
  `

  S.News = styled.div`
    border: 1px solid #000;
    border-radius: 30px;
    padding: 10px 25px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      border: 1px solid #fff;
    }
  `

  S.ContentBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
  `

  S.Content = styled.div`
    cursor: pointer;
  `

  S.Date = styled.div`
    color: rgba(0, 0, 0, 0.5);
  `

  S.NextPrevButtonBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `

  S.Bar = styled.div`
    color: rgba(0, 0, 0, 0.5);
  `

  S.NextPrev = styled.div`
    cursor: pointer;
  `



export default S;