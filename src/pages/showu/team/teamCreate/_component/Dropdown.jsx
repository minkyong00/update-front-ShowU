import React from 'react';
import AreaDropdown from './AreaDropdown';
import FieldDropdown from './FieldDropdown';
import TotalDropdown from './TotalDropdown';

const Dropdown = ({ setValue, teamDatas }) => {
  return (
    <>

      {/* 지역 드롭다운 */}
      <AreaDropdown setValue={setValue} teamDatas={teamDatas} />

      {/* 분야 드롭다운 */}
      <FieldDropdown setValue={setValue} teamDatas={teamDatas} />

      {/* 경력 드롭다운 */}
      <TotalDropdown setValue={setValue} teamDatas={teamDatas} />

    </>
  );
};

export default Dropdown;