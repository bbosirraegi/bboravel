import { Avatar } from 'components';
import React, { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

const ReplyForm = ({ session, action }) => {
  /* Router */
  /* State */
  const [reply, setReply] = useState('');
  /* Functions */
  const handleReply = (e) => {
    setReply(e.target.value);
  };

  const onAction = async () => {
    await action(reply);
    setReply('');
  };
  /* Hooks */
  /* Render */
  return (
    <div className="reply-input-container">
      {session ? (
        <Avatar char={session.user_nm} thumbnail={session.thumbnail} />
      ) : (
        <Avatar />
      )}
      <div className="input-box">
        <div className="attach">
          <BsImage />
        </div>
        <input type="text" value={reply} onChange={handleReply} />
        <div className="send" onClick={onAction}>
          <MdSend />
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
