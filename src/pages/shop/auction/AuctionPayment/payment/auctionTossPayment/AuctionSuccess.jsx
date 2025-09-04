import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import S from "./styleSuccess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const AuctionSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const orderName = decodeURIComponent(searchParams.get("orderName"));
  const productId = searchParams.get("productId");
  const quantity = searchParams.get("quantity");
  const userName = decodeURIComponent(searchParams.get("userName"));
  const userEmail = decodeURIComponent(searchParams.get("userEmail"));
  const userPhone = decodeURIComponent(searchParams.get("userPhone"));
  const address = decodeURIComponent(searchParams.get("address"));
  const deliveryMessage = decodeURIComponent(searchParams.get("deliveryMessage"));

  const confirmPayment = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/shop/auction/payment/toss-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentKey,
            orderId,
            amount,
            orderName,
            productId,
            quantity,
            userName,
            userEmail,
            userPhone,
            address,
            deliveryMessage,
          }),
        }
      );

      if (response.ok) setIsConfirmed(true);
      else throw new Error("결제 확인 중 오류 발생");
    } catch (error) {
      console.error("결제 확인 중 오류 발생:", error);
      navigate("/shop/auction/payment/toss-payment/failed");
    }
  }, [
    paymentKey,
    orderId,
    amount,
    orderName,
    productId,
    quantity,
    userName,
    userEmail,
    userPhone,
    address,
    deliveryMessage,
    navigate,
  ]);

  useEffect(() => {
    if (paymentKey && orderId && amount) confirmPayment();
  }, [confirmPayment, paymentKey, orderId, amount]);

  return (
    <S.Outlet>
      {isConfirmed ? (
        <S.Container>
          <S.PayDoneText>
            <FontAwesomeIcon icon={faCircleCheck} className="check"/>
            <p>결제를 완료했습니다</p>
          </S.PayDoneText>
          <S.Wrapper>
            <S.ContentBox>
              <p>상품 이름</p>
              <p>{orderName}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>결제 금액</p>
              <p>{amount}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>주문번호</p>
              <p>{orderId}</p>
            </S.ContentBox>
            {/* <div>
              paymentKey
              {paymentKey}
            </div> */}
            <S.ContentBox>
              <p>수량</p>
              <p>{quantity}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>성함</p>
              <p>{userName}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>이메일</p>
              <p>{userEmail}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>휴대전화</p>
              <p>{userPhone}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>주소</p>
              <p>{address}</p>
            </S.ContentBox>
            <S.ContentBox>
              <p>배송 메시지</p>
              <p>{deliveryMessage}</p>
            </S.ContentBox>
          <S.ToMyPayButton onClick={() => navigate('/my-pay')}>마이페이 결제내역 바로가기</S.ToMyPayButton>
          </S.Wrapper>
          {/* <a href="https://developers.tosspayments.com/sandbox">
            다시 테스트하기
          </a>
          <br />
          <br />
          <a
            href="https://docs.tosspayments.com/guides/v2/payment-widget/integration"
            target="_blank"
            rel="noopener noreferrer"
          >
            결제 연동 문서가기
          </a> */}
        </S.Container>
      ) : (
        <div>
          <h2>결제 요청까지 성공했어요. 결제 승인하고 완료해보세요.</h2>
          <button onClick={confirmPayment}>결제 승인하기</button>
        </div>
      )}
    </S.Outlet>
  );
};

export default AuctionSuccess;