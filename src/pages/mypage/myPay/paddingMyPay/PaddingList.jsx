import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaddingComponent from './PaddingComponent';
import Paging from '../../_component/Paging';
import usePagination from '../../../../hooks/usePagination';
import { API_URL } from '../../../../config.js';

const PAGINATION = {
  pageRange: 2,
  btnRange: 3,
};

const PaddingList = () => {
  const [ paddingPayData, setpaddingPayData ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: paddingPayData || [],
  });

  useEffect(() => {
    const getPay = async () => {
      try {
        const response = await fetch(`${API_URL}/my/payment/padding`, {
          method : "GET",
          headers : {
            'Authorization': `Bearer ${jwtToken}`
          }
        })
        .then((res) => res.json())
        .then((res) => {
          if(!res.ok){
            console.log(res.message)
          }
          setpaddingPayData(res.paymentPadding)
          console.log(res.paymentPadding)
          // console.log(res.message)
        })
      } catch (error) {
        console.log("PayError", error);
      }
    };

    getPay();
  }, [jwtToken]);

  console.log("미결제 내역", paddingPayData)

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  

  return (
    <div>
      <PaddingComponent 
        currentList={currentList}
        handleNavigate={handleNavigate} 
      />

      <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
      />
    </div>
  );
};

export default PaddingList;