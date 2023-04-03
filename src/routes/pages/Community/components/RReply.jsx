import { Avatar } from 'components';
import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';
import { SlOptions } from 'react-icons/sl';

const RReply = ({ session, action }) => {
  const ref = useRef();
  /* Router */
  /* State */
  const [isCollapse, setIsCollapse] = useState(false);
  const [reply, setReply] = useState('');
  /* Functions */
  const handleReply = (e) => {
    setReply(e.target.value);
  };

  const handleFold = useCallback(() => {
    if (!ref.current) {
      return;
    }
    if (isCollapse) {
      ref.current.style.height = 0;
      ref.current.style.padding = '0';
    } else {
      ref.current.style.height = `40px`;
      ref.current.style.padding = '3% 0';
    }
    setIsCollapse(!isCollapse);
  }, [isCollapse]);

  const handleAction = async () => {
    const result = await action(reply);
    if (result) {
      setReply('');
      return true;
    }
    return false;
  };
  /* Hooks */
  /* Render */
  return (
    <>
      <div className="reply-depth-writer-container">
        <div className="rreply-btn" onClick={handleFold}>
          댓글 달기
        </div>
        <div className="feedback-btn">
          <AiOutlineHeart />
          <div>0</div>
          <SlOptions />
        </div>
      </div>
      <div className="rrply-container" ref={ref}>
        {session ? (
          <Avatar
            size={24}
            char={session.user_nm}
            thumbnail={session.thumbnail}
          />
        ) : (
          <Avatar size={24} />
        )}
        <div className="input-box">
          <div className="attach">
            <BsImage />
          </div>
          <input type="text" value={reply} onChange={handleReply} />
          <div className="send" onClick={handleAction}>
            <MdSend />
          </div>
        </div>
      </div>
    </>
  );
};

export default RReply;
