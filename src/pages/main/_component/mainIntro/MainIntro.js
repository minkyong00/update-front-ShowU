import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faHouseLaptop, faPeopleGroup, faShop, faStore, faTicket, faTv, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MainIntro = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Ul>
          <S.LiBox>
            <Link to={'/showu/team'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faPeopleGroup} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>Team</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/shop/md'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faShop} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>md</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/shop/auction'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faGifts} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>경매</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/vod'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faTv} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>Vod</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/reservation/space/space-rental'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faHouseLaptop} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>공간대여</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/reservation'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faTicket} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>티켓예매</li>
          </S.LiBox>
          <S.LiBox>
            <Link to={'/community'}>
              <S.LiIcon>
                <FontAwesomeIcon icon={faUserPen} className='icon'/>
              </S.LiIcon>
            </Link>
            <li>커뮤니티</li>
          </S.LiBox>
        </S.Ul>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainIntro;