import styled from "styled-components";

const S = {};

  S.container = styled.div`
    width: 1100px;
    height: 500px;
    margin: 0 auto;
    border-radius: 30px;

    position: relative;
  `

  S.Banner = styled.div`
    /* background-color: gray; */
    width: 100%;
    height: 100%;

    border-radius: 30px;

    & img {
      width: 1100px;
      height: 500px;
    }
  `

  S.Ul = styled.ul`
    display: flex;
    overflow: hidden;
  `

  S.NextPrevButtonBox = styled.div`
    z-index: 99;

    position: absolute;
    top: 440px;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 120px;
    height: 40px;
    background-color: #fff;
    border-radius: 30px;
  `

  S.Bar = styled.div`
    color: rgba(0, 0, 0, 0.3);
  `

  S.NextPrevButton = styled.button`
    z-index: 99;
    background: none;
    border: none;
  `

export default S;