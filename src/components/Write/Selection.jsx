import React from 'react';

const Selection = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="select-wrapper">
      <div className="select-box">
        <div className="card">
          <div>
            <AiOutlineMessage size={30} />
          </div>
          <div>여행 정보 & 이야기</div>
        </div>
        <div className="card">여행 정보 & 이야기</div>
      </div>
      <div className="select-description">
        여행과 관련 된 이야기를 나눠주세요.
        <br />
        혐오, 음란물 등 부적절한내용을 남기지 말아주세요.
        <br />
        신고 누적 시 커뮤니티 이용이 제한될 수있습니다. <br />
        상단 글쓰기 안내를 참고해주세요!
      </div>
      <div className="select-thumbnail">
        <img
          src="https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785"
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

export default Selection;
