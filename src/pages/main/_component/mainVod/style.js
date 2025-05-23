import styled from "styled-components";

const S = {};

  S.BackgroudhalfBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
  `

  S.BackgroudColorGary = styled.div`
    background-color: #EFF0F2;
    height: 500px;
  `

  S.BackgroudColorWhite = styled.div`
    background-color: #fff;
    height: 300px;

    position: relative;
  `

  S.Title = styled.div`
    width: 1100px;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;

    position: absolute;
    top: 30%;
    left: 43%;
  `

  S.Container = styled.div`
    width: 1100px;
    height: 1030px;
    margin: 0 auto;
  `

  S.VodContainer = styled.div`
    width: 1100px;
    margin: 0 auto;

    position: absolute;
    top: 73%;
    left: 13%;
  `

  S.VodWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `

  S.Vod1 = styled.div`
    position: relative; 
    width: 520px;
    height: 500px;
    background-color: gray;
    border-radius: 30px;
    cursor: pointer;
    overflow: hidden;

    & img {
      width: 520px;
      height: 500px;
      border-radius: 30px;
      object-fit: cover;
      display: block;
    }

    & .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5); 
      opacity: 0;
      transition: opacity 0.3s ease;
      text-align: center;
      padding: 20px;

      & p {
        color: #fff;
        font-size: 17px;
      }
    }

    &:hover .overlay {
      opacity: 1;
    }
  `


  S.Vod2 = styled.div`
    position: relative; 
    width: 320px;
    height: 240px;
    background-color: gray;
    border-radius: 30px;
    cursor: pointer;
    overflow: hidden;

    & img {
      width: 320px;
      height: 240px;
      border-radius: 30px;
      object-fit: cover;
      display: block;
    }

    & .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5); 
      opacity: 0;
      transition: opacity 0.3s ease;
      text-align: center;
      padding: 20px;

      & p {
        color: #fff;
        font-size: 17px;
      }
    }

    &:hover .overlay {
      opacity: 1;
    }
  `


  S.VodRightSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `

  S.MoreVodBox = styled.div`
    display: flex;
    gap: 35px;

    width: 250px;
    height: 55px;
    padding: 15px 30px;
    border: 1px solid #fff;
    border-radius: 30px;
    background-color: #fff;

    cursor: pointer;

    &:hover {
      background-color: #ffd400;
      border: 1px solid #ffd400;
    }

    position: absolute;
    top: 105%;
    left: 40%;
  `





  

export default S;