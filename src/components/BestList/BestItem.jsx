import React from 'react';

const BestItem = ({ title, content, thumbnail }) => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="best-item">
      <div className="best-text">
        <div className="best-title">{title}</div>
        <div className="best-content">{content}</div>
      </div>
      <div className="best-img">
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );
};

BestItem.defaultProps = {
  title: '오늘자 교토 벚꽃 현황입니다',
  content:
    '이제 봉우리가 열리기 시작한게 많습니다. 이번주 비온 뒤가 되면 제대로 개화 시작 될...',
  thumbnail:
    'https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c49f5287469802eca457586a25a096fd31',
};

export default BestItem;
