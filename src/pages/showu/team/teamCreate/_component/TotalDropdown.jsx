import React, { useEffect, useRef, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDropdown from '../../../../../hooks/useDropdown';
import S from '../../../../mypage/myGrade/GradeStyle';
import Total from './Total';

const TotalDropdown = ({ setValue, teamDatas }) => {
  const dropdownRef = useRef(null);
  const [totalValue, setTotalValue] = useState("경력을 선택하세요"); 
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const fieldList = ["경력무관", "신입", "경력"];

  useEffect(() => {
    if(teamDatas?.careerHistory){
      setTotalValue(teamDatas.careerHistory);
      setValue("teamDatas", teamDatas.careerHistory);
    }
  }, [teamDatas, setValue])

  const handleDropdownSelect = (value) => {
    setTotalValue(value);
    setValue("careerHistory", value);
    setIsOpen(false);
  };

  return (
    <>
      <S.LabelSelect htmlFor='total' className='total' ref={dropdownRef}>
        <span>경력</span>

        <S.DropdownButton
          type='button'
          className='dropdown'
          onClick={() => setIsOpen(!isOpen)}
          value={totalValue}
        >
          {totalValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu>
          { isOpen && (
            <ul>
              {fieldList.map((total, i) => (
                <Total 
                  key={i}
                  value={total}
                  setTotalValue={handleDropdownSelect}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )}
        </S.DropdownMenu>

      </S.LabelSelect>
    </>
  );
};

export default TotalDropdown;