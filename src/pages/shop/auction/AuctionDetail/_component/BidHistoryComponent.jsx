import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const BidHistoryComponent = ({ auctionProduct }) => {
  const sortedBidHistory = [...auctionProduct.bidHistory].sort((a, b) => b.price - a.price);
  const [ moreBidCount, setMoreBidCount ] = useState(3);
  console.log("moreBidCount", moreBidCount)
  
  const moreBids = sortedBidHistory.slice(0, moreBidCount);
  console.log("moreBids", moreBids)

  const handleMoreBid = () => {
    setMoreBidCount((prev) => prev + sortedBidHistory.length - 3);
  }

  return (
    <>
      {/* 최신입찰 없을 경우 최신입찰 내역 숨기기 */}
      { auctionProduct.bidHistory.length > 0 && (
        <>
          <p className="title">최신 입찰</p>
            {moreBids.map((bid, i) => (
              <div key={i}>
                <p className="userId">입찰자 {bid.userId}</p>
                <p className="date">{new Date(bid.timestamp).toLocaleString()}</p>
                <p className="price">￦{bid.price.toLocaleString()}</p>
              </div>
            ))}
            { moreBidCount < sortedBidHistory.length && (
              <button
                onClick={handleMoreBid}
                style={{
                  border: 'none', background: 'none',
                  display: 'flex', gap: '5px',
                  fontWeight: '600', fontSize: '15px',
                  padding: '0'
                }}
              >
                {sortedBidHistory.length - 3}개 입찰 더보기
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              )}
        </>
      )}
    </>
  );
};

export default BidHistoryComponent;
