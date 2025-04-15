import styled from "styled-components";

const S = {};

S.Box = styled.div`
  height: 60vh;
`

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 600px;
  /* max-width: 600px; */
  margin: 30px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

S.Details = styled.div`
  margin-bottom: 20px;
  text-align: left;
  width: 100%;

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
`;

S.PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default S;
