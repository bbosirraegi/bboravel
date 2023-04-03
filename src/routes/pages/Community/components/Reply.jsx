import React from 'react';
import RReply from './RReply';
import { AiFillCaretDown } from 'react-icons/ai';
import { Avatar } from 'components';
import moment from 'moment';

const Reply = ({ session, reply, action }) => {
  /* Router */
  /* State */
  const { user_nm, content, thumbnail, timestamp } = reply;
  const { seconds } = timestamp;
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    reply && (
      <div className="reply-item">
        <div className="reply-avatar">
          <Avatar size={36} char={user_nm} thumbnail={thumbnail} />
        </div>
        <div className="reply-content">
          <div className="reply-user">
            <div>{user_nm}</div>
            <span className="divider">·</span>
            <div className="timestamp">
              {moment(seconds * 1000)
                .startOf('day')
                .fromNow()}
            </div>
          </div>
          <div className="reply-content-item">{content}</div>
          <RReply session={session} action={action} />
          <div className="reply-depth-container">
            {/* <AiFillCaretUp /> */}
            <AiFillCaretDown /> 답글 1개 보기
          </div>
        </div>
      </div>
    )
  );
};

export default Reply;
