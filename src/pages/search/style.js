import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;

  p#search-title {
    font-size: 25px;
    font-weight: 500;
  }
`

S.ShopContainer = styled.div`
  width: 980px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
`

S.Shop = styled.div`
  width: 300px;
  margin: 0 10px;

  img {
    width: 100%;
    height: 300px;
  }
`

S.AuctionBidBox = styled.div`
  display: flex;
  gap: 10px;
`

export default S;
