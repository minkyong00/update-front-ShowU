import React from 'react';
import S from '../PayStyle';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const PaddingComponent = ({ currentList, handleNavigate }) => {
  const { currentUser } = useSelector((state) => state.user)
  // console.log("미결제 경매", currentList)
  const navigate = useNavigate();

  // 바로 구매
  const purchase = (e) => {
    const confirmPurchase = window.confirm("결제 페이지로 이동하시겠습니까?");

    if (confirmPurchase) {
      navigate("/shop/auction/payment", {
        state: {
          currentList,
          userId: currentUser?._id,
        },
      });
    }
  };

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 md, 경매에 구매한 제품이 없네요!</p>
        <p>원하는 상품 구매를 진행해보세요.</p>
        <Link to={"/shop"}>
          <S.LinkToPath>shop 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }


  return (
    <div>
      <S.Table>
        <S.Thead>
          <S.Tr>
            {/* <th scope="col">No</th> */}
            <th scope="col">날짜</th>
            <th scope="col">상품명</th>
            <th scope="col">결제금액</th>
            <th scope="col">카테고리</th>
            <th scope="col">결제상태</th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {currentList
            ?.filter(item =>
              item.bidHistory.some(bid => bid.userId.toString() === currentUser._id.toString())
            )
            .map((item, i) => {
              const latestBid = item.bidHistory
                .filter(bid => bid.userId.toString() === currentUser._id.toString()) //낙찰된 사용자와 로그인한 사용자가 일치치
                .at(-1); // 가장 마지막 입찰(가격이 가장 높은 입찰)

              return (
                <React.Fragment key={item._id || i}>
                  <S.ContentTr onClick={purchase}>
                    <th scope="row">{new Date(latestBid.timestamp).toLocaleString()}</th>
                    <td>{item.auctionName}</td>
                    <td>{latestBid.price.toLocaleString()}원</td>
                    <td>경매</td>
                    <td>미결제</td>
                  </S.ContentTr>
                  <tr>
                    <td colSpan="6">
                      <S.Image>
                        <img
                          onClick={() =>
                            handleNavigate(`/shop/auction/detail/${item._id}`)
                          }
                          src={`${process.env.PUBLIC_URL}${item.image}`}
                          alt="상품 이미지"
                        />
                      </S.Image>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
        </S.Tbody>
      </S.Table>
    </div>
  );
};

export default PaddingComponent;