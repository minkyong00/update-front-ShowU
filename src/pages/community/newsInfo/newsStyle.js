// 뉴스 세부 페이지 스타일

import styled  from "styled-components"
import { backgroundBlack } from "../../../global/common";

    const S = {};

    S.Error = styled.div`
        font-size: 30px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding-top: 100px;
    `

    S.Wrapper = styled.div`
    background-color: #444444; 
`

    S.SubWrapper = styled.div` // 전체 배경 black
        ${backgroundBlack}  
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `;

    S.IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        height: 100%;

        .icon{
            font-size: 20px;
            padding-bottom: 50px;

        path {
            color : #ffd400;
        }
    }
    `

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: bold;
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `
    

    S.Titles = styled.div` // 페이지 메인 타이틀 All
        display: flex;
        margin: 20px;

    `

    S.MainTitle = styled.div` // 페이지 메인 타이틀

           
    `

    S.SubTitle = styled.div` // 페이지 서브 타이틀
        margin-top: 14px;
        margin-left: 8px;
    `



    S.section = styled.div`
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
  
        p {
            font-size: 16px;
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        }
  
        div {
            margin-bottom: 10px;
            text-align: left;
        }
    `

    S.Title = styled.div`
        font-size: 18px;
        font-weight: medium;
        display: flex;
        margin-left: 20px;
        margin-top: 30px;
    `

    S.Line2 = styled.div`
        border-bottom: 2px solid #ffd400;
        margin-left: 20px;
        margin-right: 1000px;
    `

    S.Images = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    object-fit: cover;

    img {
      width: 100%;
      max-width: 400px;
      margin-bottom: 15px;
    }

    p {
      margin-top: 10px;
    }    
    `

    S.Titles = styled.div` 
        display: flex;
        margin: 20px;
    `

    S.MainTitle = styled.div` 
        font-size: ${({ theme }) => theme.FONT_SIZE.h3};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        margin-top: 0px;
    `

    S.SubTitle = styled.div` 
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        margin-top: 14px;
        margin-left: 8px;     
    `

    S.content = styled.div`
        padding: 20px;
    `

S.ButtonGroup = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin-top: 20px;

button {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 12px 20px;

    &:hover {
      background-color: #ffd400; 
      color: black; 
      }
  }
`

    S.Button = styled.button`
        background-color: ${(props) =>
        props.liked ? "#ffd400" : ({ theme }) => theme.PALLETE.gray["300"]};
        color: ${(props) => (props.liked ? "black" : "white")};
        border: none;
        border-radius: 50px;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: ${(props) =>
            props.liked ? "#e6c700" : "#d6d6d6"}; 
            color: ${(props) => (props.liked ? "black" : "white")};
        }
    `;

    S.Buttons = styled.div`
        display: flex;
        gap: 4px;
    `;
export default S;