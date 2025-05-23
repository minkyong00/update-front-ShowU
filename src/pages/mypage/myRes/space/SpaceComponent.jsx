import React from 'react';
import S from './SpaceStyle';
import Paging from '../../_component/Paging';
import { Link } from 'react-router-dom';

const SpaceComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 공간을 대여하지 않았네요!</p>
        <p>연습하고 싶은 공간을 대여해보세요.</p>
        <Link to={"/reservation/space/space-rental"}>
          <S.LinkToPath>공간대여 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <>
      <S.Container className='container'>
        { currentList && currentList.map((item, i) => (
          <S.Warpper key={i} className='warpper'>
            <S.Image className='image'>
              <img src={item.img} alt="공간대여" />
            </S.Image>
            <S.Content className='content'>
              <S.Title className='title'>
                <p className='spaceName'>{item.name}</p>
                {/* <div className='heartBox'>
                  <FontAwesomeIcon icon={faHeart} className='heart'/>
                  <p className='likeCount'>{item.like}</p>
                </div> */}
              </S.Title>
              {/* <p className='type'>{item.type}</p> */}
              <p className='area'>{item.location}</p>
              <p className='price'>{item.price}</p>
            </S.Content>
          </S.Warpper>
        ))}
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />  
      </S.Container>
    </>
  );
};

export default SpaceComponent;