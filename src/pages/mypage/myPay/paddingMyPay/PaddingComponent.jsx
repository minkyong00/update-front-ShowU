import React from 'react';
import S from '../PayStyle';
import { useSelector } from 'react-redux';


const PaddingComponent = ({ currentList, handleNavigate }) => {
  const { currentUser } = useSelector((state) => state.user)
  // console.log("currentUser", currentUser._id)

  console.log("미결제 내역", currentList.map((bid) => bid.bidHistory))
  const bidHistory = currentList.map((bid) => bid.bidHistory)
  console.log("bidHistory", bidHistory)
  


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
                <th scope="row">{item.bidHistory.timestamp}</th>
                <td>
                  {item.auctionName}
                </td>
                {/* <td>{item.totalAmount}</td> */}
                <td>경매</td>
                {/* <td>{item.status}</td> */}
              </S.ContentTr>
              <tr>
                <td colSpan="6">
                  <S.Image>
                      <img
                        onClick={() => handleNavigate( 
                          `/shop/auction/detail/${item.productId._id}`
                          )}
                        src={item.image}
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

export default PaddingComponent;