import styled from "styled-components";

const S = {};

  S.container = styled.div`
    width: 1100px;
    height: 700px;
    margin: 0 auto;

    position: relative;
  `

  S.Banner = styled.div`
    background-color: gray;
    width: 100%;
    height: 100%;

    border-radius: 30px;

    & img {
      width: 1100px;
      height: 700px;
    }
  `

  S.Ul = styled.ul`
    display: flex;
    overflow: hidden;
  `

  S.NextPrevButtonBox = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100px;
    height: 40px;
    background-color: #fff;
    border-radius: 30px;
  `

  S.Bar = styled.div`
    color: rgba(0, 0, 0, 0.3);
  `

  S.NextPrevButton = styled.div`
    cursor: pointer;
  `

export default S;