import styled from 'styled-components';

const S = {};

  S.Hr = styled.hr`
    border: 1px solid rgba(0, 0, 0, 0.3);
  `

  S.Container = styled.div`
    background-color: #EFF0F2;
  `

  S.Wrapper = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* background-color:#fff; */
    /* background-color: #EFF0F2;  */
    min-height: 100vh;
    /* padding: 60px 20px; */
    margin: 0 auto;
    gap: 30px;

    & p{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  `

  S.MoreTeamTitleBox = styled.div`
    display: flex;
    align-items: center;
  `

  S.LessonWrapper = styled.div`
    display: flex;
    gap: 30px;
    justify-content: flex-end;
  `

  S.MoreLesson = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 5px;
    margin-left: 20px;

    & .more, 
    & span {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.6);
      /* margin-bottom: 30px; */
    }
  `

  S.LessonBox = styled.div`
    width: 290px;
    height: 400px;
    border: 1px solid #EFF0F2;
    /* background-color: #EFF0F2; */

    border-radius: 30px;
    padding: 33px 27px;

    position: relative;
    background-color: #fff;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 20px;
    }
  `

  S.category = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;

    & .category {
      width: 50px;
      background-color: #ffd400;
      color: #000;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }

    & .total {
      width: 70px;
      background-color: #797979;
      color: #fff;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }
  `

  S.UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 20px;

    & .teamName {
      font-weight: 500;
      font-size: 18px;
    }

    & .category {
      font-size: 16px;
    }
  `

  S.Address = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
  `

  S.LessonExplantion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    position: relative;

    & .lessonName {
      color: #797979;
    }

    & .lessonDetail {
      font-size: 18px;
      font-weight: 500;
    }
  `

  S.Period = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;

    position: absolute;
    bottom: 27px;
  `

  S.Career = styled.div`
    display : flex;
    align-items: center;
    gap: 5px;

    position: absolute;
    top: 125px;
  `

export default S;