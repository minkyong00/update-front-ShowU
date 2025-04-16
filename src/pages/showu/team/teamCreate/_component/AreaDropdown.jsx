import React, { useRef, useState } from 'react';
import Area from './Area';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDropdown from '../../../../../hooks/useDropdown';
import S from '../../../../mypage/myGrade/GradeStyle';

const AreaDropdown = ({ setValue }) => {
  const dropdownRef = useRef(null);
  const [areaValue, setAreaValue] = useState("지역을 선택하세요"); 
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const areaList = [
    "서울", "경기", "경북", "경남", "충북", "충남", "전북", "전남", "인천", "강원", "제주"
  ];

  const handleDropdownSelect = (value) => {
    setAreaValue(value);
    setValue("area", value); // useForm에 area 값을 설정
    setIsOpen(false);
  };

  return (
    <>
      <S.LabelSelect htmlFor='area' className='area' ref={dropdownRef}>
        <span>지역</span>

        <S.DropdownButton
          type='button'
          className='dropdown'
          onClick={() => setIsOpen(!isOpen)}
          value={areaValue}
        >
          {areaValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu>
          { isOpen && (
            <ul>
              {areaList.map((area, i) => (
                <Area 
                  key={i}
                  value={area}
                  setAreaValue={handleDropdownSelect}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )

          }
        </S.DropdownMenu>

      </S.LabelSelect>
    </>
  );
};

export default AreaDropdown;