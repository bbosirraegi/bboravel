import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Avatar } from 'components';
import Album from '../Main/component/Album';
import Tag from '../Main/component/Tag';
import { AiFillCaretDown, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsLink45Deg } from 'react-icons/bs';
import moment from 'moment';
import { useSession } from 'utils/SessionManager';
import RReply from './components/RReply';
import Reply from './components/Reply';
import './community.css';
import ReplyForm from './components/ReplyForm';

const CommunityPresenter = ({ community, createReply }) => {
  /* Router */
  /* State */
  const {
    albums = [],
    content,
    id,
    like = [],
    location,
    reply = [],
    tags,
    timestamp,
    title,
    writer: { user_id, user_nm, user_thumbnail },
  } = community;

  const { seconds } = timestamp;

  const { session } = useSession();
  /* Functions */
  /* Hooks */
  /* Render */

  const replyRender =
    community.reply &&
    community.reply.map((item) => {
      const { id } = item;
      return (
        <Reply key={id} session={session} reply={item} action={createReply} />
      );
    });
  return (
    <div className="community-detail-container">
      <div className="writer">
        <div className="avatar-wrapper">
          <Avatar thumbnail={user_thumbnail} char={user_nm} />
        </div>
        <div className="w-wrapper">
          <div className="name">{user_nm}</div>
          <div className="w-info">
            {location && (
              <>
                <span className="location">
                  <MdLocationOn size={11} />
                  {location}
                </span>
                <span className="divider">·</span>
              </>
            )}

            <span className="timestamp">
              {moment(seconds * 1000)
                .startOf('day')
                .fromNow()}
            </span>
          </div>
        </div>
        <div className="options">...</div>
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="community-content">{content}</div>
        <div className="tag">
          {tags &&
            tags.map((item, idx) => {
              return <Tag key={idx} title={item} />;
            })}
        </div>
        {/* <div className="album"> */}
        <Album album={albums} />
        {/* {albums.map((item, idx) => {
            return <img src={item} alt={idx} key={idx} />;
          })} */}
        {/* </div> */}
      </div>
      <div className="feedback">
        <div className="like">
          <AiOutlineHeart size={25} />
          <div className="cnt">{like}</div>
          {/* <AiFillHeart size={30} /> */}
        </div>
        <div className="space"></div>
        <div className="share">
          <BsLink45Deg size={25} />
        </div>
        <div className="bookmark">
          <BsBookmark size={20} />
          {/* <BsBookmarkFill /> */}
        </div>
      </div>
      <ReplyForm session={session} action={createReply} />
      <div className="reply-list-container">
        <div className="reply-header">
          댓글 {community.reply ? community.reply.length : 0}
        </div>
        {replyRender}
      </div>
    </div>
  );
};

export default CommunityPresenter;
