import styled from "styled-components";

const S = {};

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#fff;
    width: 100%;
    height: 150vh;

    & p.newTeam{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 50px;
      color: #000;
    }
  `

  S.MoreLesson = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    & svg.down {
      margin-bottom: 30px;

      & path {
        color: #000;
      }
    }
  `

  S.FormContainer = styled.div`
    width: 1000px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #444444;
    border-radius: 5px;
  `

  S.Fieldset = styled.fieldset`
    width: 822px;
    height: auto;

    display: flex;
    flex-direction: column;

    & input {
      background-color: black;
      color: #000;

      width: 648px;
      height: 40px;


      border: none;
    }


    & input::placeholder{
      color: #000;
      font-size: 17px;
    }

    & textarea {
      background-color: #fff;
      color: #000;
      border: none;

      width: 680px;
      height: 460px;

      margin: 10px 0 0 0;
    }

    & textarea::placeholder{
      color: #fff;
      font-size: 17px;
    }
  `

  S.Form = styled.form`
    margin-top: 30px;
  `

  S.Label = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 27px;

    margin-bottom: 20px;
    border-radius: 5px;

    & p {
      font-size: 17px;
      margin-left: 10px;
    }
    
    & input#teamName {
      margin-left: 47px;
    }

    & input#title {
      margin-left: 32px;
    }

    & input#area {
      margin-left: 60px;
    }

    & input#category{
      margin-left: 60px;
    }

    & input#recruit{
      margin-left: 30px;
    }

    & input#careerHistory{
      margin-left: 55px;
    }
  `

  S.LabelTextAarea = styled.label`
    width: 820px;
    height: 498px;

    border: 0.5px solid #444444;

    display: flex;
    gap: 46px;
    
    margin-bottom: 20px;
    border-radius: 5px;

    & p {
      font-size: 17px;
      margin: 10px 0 0 10px;
    }

    & textarea {
      font-size: 17px;
      margin-left: 10px;
    }
  `

  S.Portfolio = styled.div`
    & label::after {
      /* content: '+자료첨부'; */
      cursor: pointer;
      font-size: 17px;
      margin-left: 8px;
    }

    & input {
      display: none;
    }
  `
  S.Button = styled.button`
    width: 145px;
    height: 55px;

    border-radius: 50px;
    background-color: #ffd400;
    border: none;

    color: black;
    font-size: 17px;
    font-weight: 500;

    &.back{
      background-color: #797979;
      color: white;

      position: absolute;
      bottom: 180px;
      left: 680px;
    }

    &.submit {
      position: absolute;
      bottom: 180px;
      left: 850px;
    }
  `

export default S;