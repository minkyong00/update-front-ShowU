import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style'; 

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const token = localStorage.getItem("jwtToken");
  const [filteredShoplist, setFilteredShoplist] = useState([]); //shop md filter
  const [filteredAuctionList, setFilteredAuctionList] = useState([]) //shop auctoin filter
  const [filteredReservationlist, setFilteredReservationlist] = useState([]);
  const [filteredSpaceList, setFilteredSpaceList] = useState([])
  const [filteredVodlist, setFilteredVodlist] = useState([]);
  const [auditionData, setAuditionData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [commuData, setCommuData] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  // console.log("md", shoplist)
  // console.log("auction", filteredAuctionList)
  // console.log("ticket", ticketEvents)
  // console.log("space", spaceList)
  // console.log("vod", videoList)
  // console.log("audition", auditionData)
  // console.log("news", newsData)
  // console.log("commu", commuData)
  // console.log("team", teamList)

  // Shop md 데이터
  useEffect(() => {
    const getMdItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/shop/md");
        const datas = await response.json();
        setFilteredShoplist(
          datas.filter(item => item.mdName.toLowerCase().includes(query.toLowerCase()))
        );
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdItems();
  }, [query]);

  // shop auction 데이터
  useEffect(() => {
    const getAuctionItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/shop/auction");
        const datas = await response.json();
        setFilteredAuctionList(
          datas.filter(item => item.auctionName.toLowerCase().includes(query.toLowerCase()))
        );
      } catch (error) {
        console.error("검색 쿼리 경매 Error", error);
      }
    };

    getAuctionItems();
  }, [query]);

  // Reservation  티켓 데이터
  useEffect(() => {
    const fetchTicketEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/reservation/ticketEvents",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다.");
        }
        const fetchedData = await response.json();
        setFilteredReservationlist(
          fetchedData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        );
      } catch (error) {
        console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
      }
    };

    fetchTicketEvents();
  }, [query]);

  // reservation space 데이터
  useEffect(() => {
    const getSpaceItem = async () => {
      try {
        const response = await fetch("http://localhost:8000/reservation/spaces", {
          headers : {
            Authorization: `Bearer ${token}`
          }
        });
        const datas = await response.json();
        setFilteredSpaceList(
          datas.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        )
      } catch (error) {
        console.error("공간 대여 검색 가져오는 중 error", error)
      }
    }

    getSpaceItem();

  }, [query])

  // Vod 데이터
  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod");
        const data = await response.json();
        if (response.ok) {
          setFilteredVodlist(
            data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
          );
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    vodVideo();
  }, [query]);

  // Audition 데이터
  useEffect(() => {
    const fetchAuditions = async () => {
      try {
        const response = await fetch("http://localhost:8000/community/audition"); 
        if (!response.ok) {
          throw new Error("오디션 데이터를 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        setAuditionData(data.filter(audition => audition.description.toLowerCase().includes(query.toLowerCase()))); 
      } catch (error) {
        console.error("오디션 데이터 로드 오류:", error);
        setAuditionData([]);
      }
    };

    fetchAuditions();
  }, [query]);

  // News 데이터
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/community/newsMain");
        const data = await response.json();
        setNewsData(data.filter(news => news.title.toLowerCase().includes(query.toLowerCase())));
      } catch (error) {
        console.error("뉴스 데이터 오류 발생:", error);
      }
    };

    fetchNews();
  }, [query]);

  // General Community 데이터
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await fetch('http://localhost:8000/community', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
        const fetchedData = await response.json(); 
        setCommuData(fetchedData.filter(commu => commu.title.toLowerCase().includes(query.toLowerCase()))); 
      } catch (error) {
        console.error("커뮤니티 데이터를 불러오는 데 실패했습니다.", error);
        setCommuData([]);
      }
    };

    fetchData();
  }, [query]);

  //team 데이터
  useEffect(() => {
    const getTeamList = async () => {
      try {
        const response = await fetch("http://localhost:8000/showu/team");
        const data = await response.json();
        setTeamList(data.teamList.filter(team => team.teamName.toLowerCase().includes(query.toLowerCase())));
      } catch (error) {
        console.error("검색 팀 데이터 가져오는 중 오류 발생:", error);
      }
    };

    getTeamList();
  }, [query]);
  
  // useEffect(() => {
  //   const getAllSearchList = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/search`);
  //       const data = response.json();
  //       setSearchList(data.allFoundSearch)
  //     } catch (error) {
  //       console.error("모든 검색 결과 데이터 가져오는 중 오류 발생:", error);
  //     }
  //   }

  //   getAllSearchList()
  // }, [query])

  // console.log("searchList", searchList)
  // console.log('검색어:', query); 
  

  return (
    <>
      <div className='wrapper'>
        <div className='search-result'>
          <div>
            <p>{`${query}에 대한 검색결과`}</p>
          </div>

          {/* shop md 검색 결과 */}
          { filteredShoplist.length > 0 ? (
            <div>
              {filteredShoplist.map((md) => (
                <div key={md._id}>
                  <Link to={`/shop/md/detail/${md._id}`}>
                    <img src={md.image} alt="md 이미지" />
                  </Link>
                  <p>{md.mdName}</p>
                  <p>{md.price}원</p>
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* shop 경매 검색 결과 */}
          { filteredAuctionList.length > 0 ? (
            <div>
              {filteredAuctionList.map((auction) => (
                <div key={auction._id}>
                  <Link to={`/shop/auction/detail/${auction._id}`}>
                    <img src={auction.image} alt="경매 이미지" />
                  </Link>
                  <p>{auction.auctionName}</p>
                  <p>{auction.price}원</p>
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 티켓 예매 검색 결과 */}
          { filteredReservationlist.length > 0 ? (
            <div>
              {filteredReservationlist.map((ticket) => (
                <div key={ticket._id}>
                  <Link to={`/reservation/ticket-open/openDetail/${ticket._id}`}>
                    <img src={ticket.image} alt="티켓 이미지" />
                  </Link>
                  {/* <p>{ticket.mdName}</p>
                  <p>{ticket.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 공간 대여 검색 결과 */}
          { filteredSpaceList.length > 0 ? (
            <div>
              {filteredSpaceList.map((space) => (
                <div key={space._id}>
                  <Link to={`/reservation/space/rentalDetail/${space._id}`}>
                    <img src={space.image} alt="공간 이미지" />
                  </Link>
                  {/* <p>{space.mdName}</p>
                  <p>{space.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* vod 검색 결과 */}
          { filteredVodlist.length > 0 ? (
            <div>
              {filteredVodlist.map((vod) => (
                <div key={vod._id}>
                  <Link to={`/vod/play/${vod._id}`}>
                    <img src={vod.image} alt="vod 이미지" />
                  </Link>
                  {/* <p>{vod.mdName}</p>
                  <p>{vod.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 팀 매칭 검색 결과 */}
          { teamList.length > 0 ? (
            <div>
              {teamList.map((team) => (
                <div key={team._id}>
                  <Link to={`/showu/team/${team._id}`}>
                    <img src={`http://localhost:8000${team.teamProfile}`} alt="팀 이미지" />
                  </Link>
                  {/* <p>{vod.mdName}</p>
                  <p>{vod.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 커뮤니티 오디션 검색 결과 */}
          { auditionData.length > 0 ? (
            <div>
              {auditionData.map((audition) => (
                <div key={audition._id}>
                  <Link to={`/vod/play/${audition._id}`}>
                    <img src={audition.imageUrl} alt="오디션 공고 이미지" />
                  </Link>
                  {/* <p>{vod.mdName}</p>
                  <p>{vod.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 커뮤니티 뉴스 검색 결과 */}
          { newsData.length > 0 ? (
            <div>
              {newsData.map((news) => (
                <div key={news._id}>
                  <Link to={`/vod/play/${news._id}`}>
                    <img src={`http://localhost:8000/${news.imageUrl}`} alt="오디션 공고 이미지" />
                  </Link>
                  {/* <p>{vod.mdName}</p>
                  <p>{vod.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}

          {/* 커뮤니티 검색 결과 */}
          { commuData.length > 0 ? (
            <div>
              {commuData.map((commu) => (
                <div key={commu._id}>
                  <Link to={`/vod/play/${commu._id}`}>
                    <img src={`http://localhost:8000/${commu.imageUrl}`} alt="오디션 공고 이미지" />
                  </Link>
                  {/* <p>{vod.mdName}</p>
                  <p>{vod.price}원</p> */}
                </div>
              ))}
            </div>
          ) : (
            <p>{`${query}에 대한 검색 결과가 없습니다.`}</p>
          )}
        </div>
      </div>
    </>
  )

//   return (
//     <S.main className='main'>
    
//       <div className='shop'>
//       <div className="title">
//     <span className="highlight">Shop</span> 검색 결과
//         </div>
//         {filteredShoplist.length > 0 ? (
//           <div className="md-list">
//             {filteredShoplist.map(item => (
//               <S.Md key={item.id}>
//                 <Link to={`/shop/md/detail/${item._id}`}>
//                   <img src={item.image} alt={item.mdName} />
//                 </Link>
//                 <div className="md-category">{item.category}</div>
//                 <div className="md-name">{item.mdName}</div>
//                 <div className="md-price">
//                 {item.price ? item.price.toLocaleString() : "가격 정보 없음"}원
//                 </div>
//               </S.Md>
//             ))}
//           </div>
//         ) : (
//           <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//         )}
//       </div>

    
//       <div className='reservation'>
//       <div className="title">
//     <span className="highlight">예약</span> 검색 결과
//         </div>
//         {filteredReservationlist.length > 0 ? (
//           <div className="md-list">
//             {filteredReservationlist.map(item => (
//               <S.Md key={item.id}>
//                 <Link to={`/reservation/ticket-open/openDetail/${item._id}`}>
//                   <img src={item.img} alt={item.name} />
//                 </Link>
//                 <div className="md-category">{item.category}</div>
//                 <div className="md-name">{item.name}</div>
//                 <div className="md-price">
//                   {item.type}
//                 </div>
//               </S.Md>
//             ))}
//           </div>
//         ) : (
//           <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//         )}
//       </div>

//       <div className='vod'>
//       <div className="title">
//     <span className="highlight">Vod</span> 검색 결과
//         </div>
//         {filteredVodlist.length > 0 ? (
//           <div className="md-list">
//             {filteredVodlist.map(item => (
//               <S.Md key={item.id}>
//                 <Link to={`/vod/play/${item._id}`}>
//                   <img src={item.mainImage} alt={item.title} />
//                 </Link>
//                 <div className="md-category">{item.category}</div>
//                 <div className="md-name">{item.title}</div>
//               </S.Md>
//             ))}
//           </div>
//         ) : (
//           <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//         )}
//       </div>

   
//       <div className='community'>
//       <div className="title">
//     <span className="highlight">커뮤니티</span> 검색 결과
//         </div>
// <div className='audition'>
//   <p className='title'>오디션</p>
//   {auditionData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
//     <div className="md-list">
//       {auditionData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
//         <S.Md key={item.id}>
//           <Link to={`/community/audition/${item._id}`}>
//             <img src={item.imageUrl} alt={item.title} />
//           </Link>
//           <div className="md-category">{item.category || '오디션'}</div>
//           <div className="md-name">{item.title}</div>
//         </S.Md>
//       ))}
//     </div>
//   ) : (
//     <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//   )}
// </div>


// <div className='news'>
//   <p className='title'>뉴스</p>
//   {newsData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
//     <div className="md-list">
//       {newsData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
//         <S.Md key={item.id}>
//           <Link to={`/community/newsMain/news/${item._id}`}>
//             <img src={item.imageUrl} alt={item.title} />
//           </Link>
//           <div className="md-category">{item.category || '뉴스'}</div>
//           <div className="md-name">{item.title}</div>
//         </S.Md>
//       ))}
//     </div>
//   ) : (
//     <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//   )}
// </div>

//         <div className='general-community'>
//           <p className='title'>일반 커뮤니티</p>
//           {commuData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
//             <div className="md-list">
//               {commuData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
//                 <S.Md key={item.id}>
//                   <Link to={`/community/communityInfo/${item._id}`}>
//                     <img src={item.imageUrl} alt={item.title} />
//                   </Link>
//                   <div className="md-category">{item.category || '일반'}</div>
//                   <div className="md-name">{item.title}</div>
//                 </S.Md>
//               ))}
//             </div>
//           ) : (
//             <p>{`${query}에 대한 검색 결과가 없습니다...`}</p>
//           )}
//         </div>
        
//       </div>
//     </S.main>
//   );
};

export default Search;
