import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { useWrite } from 'utils/WriteManager';
import './write-layout.css';

const WriteLayout = () => {
  const { isWrite, handleIsWrite } = useWrite();
  /* Router */
  /* State */
  const initialState = {
    title: '',
    content: '',
  };
  const [write, setWrite] = useState(initialState);
  /* Functions */
  const onIsWrite = () => {
    console.log(1);
    handleIsWrite(false);
  };

  const handleTest = (e) => {
    console.log(e);
  };

  const onStopBubbling = (e) => {
    e.stopPropagation();
  };

  /* Hooks */
  /* Render */
  return (
    isWrite && (
      <div className="write-layout-container" onClick={onIsWrite}>
        <div className="write-box" onClick={onStopBubbling}>
          <div className="header">
            <div className="title">글쓰기</div>
          </div>
          <div className="body">
            <div className="select-wrapper">
              <div className="select-box">
                <div className="card">
                  <div>
                    <AiOutlineMessage size={30} />
                  </div>
                  <div>여행 정보&이야기</div>
                </div>
                <div className="card">여행 정보&이야기</div>
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
          </div>
        </div>
      </div>
    )
  );
};

export default WriteLayout;
