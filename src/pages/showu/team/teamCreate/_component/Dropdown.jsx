import React from 'react';
import AreaDropdown from './AreaDropdown';
import FieldDropdown from './FieldDropdown';
import TotalDropdown from './TotalDropdown';

const Dropdown = ({ setValue }) => {
  return (
    <>

      {/* 지역 드롭다운 */}
      <AreaDropdown setValue={setValue} />

      {/* 분야 드롭다운 */}
      <FieldDropdown setValue={setValue} />

      {/* 경력 드롭다운 */}
      <TotalDropdown setValue={setValue} />

    </>
  );
};

export default Dropdown;