import styled from "styled-components";

const S = {};

  S.Footer = styled.div`
    background-color: #ffd400;
    width: 100%;
    display: flex;
    justify-content: space-around;
    /* gap: 0px; */
    padding: 20px;

    position: sticky;
    bottom: 0;

    & p {
      color: #000;
    }

    & p.faq {
      cursor: pointer;
    }
  `

export default S;