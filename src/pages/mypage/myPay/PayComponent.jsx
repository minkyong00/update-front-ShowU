import React from 'react';
import S from './PayStyle';
import { Link } from 'react-router-dom';


const PayComponent = ({ currentList, handleNavigate }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 경매에 낙찰되지 않았네요!</p>
        <p>원하는 상품에 대해 경매를 진행해보세요.</p>
        <Link to={"/shop/auction"}>
          <S.LinkToPath>경매 보러가기</S.LinkToPath>
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
          {currentList && currentList.map((item, i) => (
            <React.Fragment key={i}>
              <S.ContentTr>
                {/* <th scope="row">{item.id}</th> */}
                <th scope="row">{item.createdAt}</th>
                {/* <td>{item.paymentAt}</td> */}
                <td>{
                  (item.type === "MD" ? item.orderName : item.orderName)
                }</td>
                <td>{item.totalAmount}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
              </S.ContentTr>

              <tr>
                <td colSpan="6">
                  <S.Image>
                      <img
                        onClick={() => handleNavigate(
                          item.type === "MD" ? 
                          `/shop/md/detail/${item.productId._id}` : 
                          `/shop/auction/detail/${item.productId._id}`
                          )}
                        src={item.productId.image}
                        alt={`상품 이미지`}
                      />
                  </S.Image>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </S.Tbody>
      </S.Table>
    </div>
  );
};

export default PayComponent;