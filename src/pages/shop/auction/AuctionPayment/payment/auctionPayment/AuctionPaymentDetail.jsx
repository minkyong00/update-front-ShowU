import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentButton from "../auctionTossPayment/PaymentButton";
import S from "./style";

const AuctionPaymentDetail = () => {
  const location = useLocation();
  const state = location.state || {};

  const {
    userName = "",
    userEmail = "",
    userPhone = "",
    auctionProduct = {},
    quantity = 1,
    totalAmount = auctionProduct.finalPrice || 0,
    address = "",
    deliveryMessage = "",
  } = state;

  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : null;
  console.log("auction", auctionProduct)

  const name = auctionProduct.map((el) => el.auctionName);
  const stringToName = Array.isArray(name) ? name[0] : name
  const productId = auctionProduct.map((el) => el._id);
  const stringToProductId = Array.isArray(productId) ? productId[0] : productId

  console.log("AuctionPaymentDetail 데이터:", {
    userName,
    userEmail,
    userPhone,
    auctionProduct,
    quantity,
    stringToName,
    totalAmount,
    address,
    deliveryMessage,
    userId,
    stringToProductId,
  });

  return (
    <S.Box>
      <S.Container>
        <S.Details>
          <p>상품 이름: {stringToName}</p>
          {totalAmount !== undefined && (
            <p>가격: {totalAmount.toLocaleString()} 원</p>
          )}
          <p>수량: {quantity}</p>
          <p>사용자 이름: {userName}</p>
          <p>이메일: {userEmail}</p>
          <p>휴대전화: {userPhone}</p>
          <p>주소: {address}</p>
          <p>배송 메시지: {deliveryMessage}</p> {/* 배송 메시지 표시 */}
        </S.Details>
        <PaymentButton
          productPrice={totalAmount}
          orderName={stringToName}
          productId={stringToProductId}
          quantity={quantity}
          userName={userName}
          userEmail={userEmail}
          userPhone={userPhone}
          address={address}
          deliveryMessage={deliveryMessage}
          userId={userId}
        />
      </S.Container>
    </S.Box>
  );
};

export default AuctionPaymentDetail;
