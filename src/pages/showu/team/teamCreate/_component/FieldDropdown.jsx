import React, { useEffect, useRef, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDropdown from '../../../../../hooks/useDropdown';
import S from '../../../../mypage/myGrade/GradeStyle';
import Field from './Field';

const FieldDropdown = ({ setValue, teamDatas }) => {
  const dropdownRef = useRef(null);
  const [fieldValue, setFieldValue] = useState("분야를 선택하세요"); 
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const fieldList = ["연기", "마술", "음악"];

  useEffect(() => {
    if(teamDatas?.category){
      setFieldValue(teamDatas.category);
      setValue("category", teamDatas.category)
    }
  }, [teamDatas, setValue])

  const handleDropdownSelect = (value) => {
    setFieldValue(value);
    setValue("category", value);
    setIsOpen(false);
  };

  return (
    <>
      <S.LabelSelect htmlFor='field' className='field' ref={dropdownRef}>
        <span>분야</span>

        <S.DropdownButton
          type='button'
          className='dropdown'
          onClick={() => setIsOpen(!isOpen)}
          value={fieldValue}
        >
          {fieldValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu>
          { isOpen && (
            <ul>
              {fieldList.map((field, i) => (
                <Field 
                  key={i}
                  value={field}
                  setFieldValue={handleDropdownSelect}
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

export default FieldDropdown;