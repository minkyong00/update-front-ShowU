import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import Padding from './Padding';

const PaddingContainer = () => {
  return (
    <div>
      <Layout 
        leftContent={<MypageContainer />}
        rightContent={<Padding />}
      />
    </div>
  );
};

export default PaddingContainer;