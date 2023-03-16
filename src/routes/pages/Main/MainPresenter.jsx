import React from 'react';
import { Card } from './component';
import './main.css';

const TEMP = [...new Array(10)];

const TEMP_AVATAR = {
  user_nm: '오경우',
  user_thumbnail:
    'https://k.kakaocdn.net/dn/bwHBEw/btrRfNJ1xaS/sXCXg5cwUboD3wTKQ5vTT1/img_640x640.jpg',
};

const MainPresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  const cList = TEMP.map((item, idx) => {
    return <Card key={idx} writer={TEMP_AVATAR} />;
  });
  return (
    <div className="main-container">
      <Card writer={TEMP_AVATAR} albums={[]} tags={[]} />
      {cList}
    </div>
  );
};

export default MainPresenter;
