import React from 'react';
import './bestlist.css';
import { useNavigate } from 'react-router-dom';
import BestItem from './BestItem';

const BEST_LIST = [...new Array(3)];

const BestList = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  const bestRender = BEST_LIST.map((_, idx) => {
    return <BestItem key={idx} />;
  });
  return (
    <div className="best-list-container">
      <div className="best-header">
        <div>베스트 게시글</div>
        <div>전체 보기 &gt;</div>
      </div>
      <div className="best-wrapper">{bestRender}</div>
    </div>
  );
};

export default BestList;
