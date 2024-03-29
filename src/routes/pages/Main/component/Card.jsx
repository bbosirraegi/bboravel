import { Avatar } from 'components';
import moment from 'moment';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  BsBookmark,
  BsBookmarkFill,
  BsChat,
  BsLink45Deg,
} from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import Album from './Album';
import './card.css';
import Tag from './Tag';

import 'moment/locale/ko';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({
  id,
  writer,
  location,
  timestamp,
  title,
  content,
  tags,
  albums,
  like,
  reply,
}) => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const { user_nm, user_thumbnail } = writer;
  const { seconds } = timestamp;
  const _content =
    content.length >= 90 ? (
      <>
        {content.slice(0, 90)}{' '}
        <Link style={{ color: 'lightgray' }} to={`/community/${id}`}>
          ... 더보기
        </Link>
      </>
    ) : (
      content
    );
  /* Functions */
  const handleDetail = () => {
    navigate(`/community/${id}`);
  };
  /* Hooks */
  /* Render */
  return (
    <div className="card-container">
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
        <div className="community-content">{_content}</div>
        <div className="tag">
          {tags.map((item, idx) => {
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
          <div className="cnt">{like.length ? like.length : 0}</div>
          {/* <AiFillHeart size={30} /> */}
        </div>
        <div className="reply" onClick={handleDetail}>
          <BsChat size={20} />
          <div className="cnt">{reply.length ? reply.length : 0}</div>
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
    </div>
  );
};

Card.defaultProps = {
  writer: '여미',
  title: '3월 16일 오늘의 출첵',
  content: `가장 한달살기 해보고 싶은 도시는 어디인가요? 자정까지 달아주신
댓글로출석 체크☑!`,
  timestamp: '약 19시간 전',
  location: '',
  tags: ['#콜롬비아'],
  albums: [
    // 'https://s3-image.yeomi.travel/42b18165-665b-4b7e-894d-654a04950c33.jpeg?w=278&q=80',
    // 'https://s3-image.yeomi.travel/bbacf561-0a59-4b4d-a4b5-bc42cd5f5ef6.jpeg?w=278&q=80',
    'https://s3-image.yeomi.travel/e33a3669-4300-423a-9acc-683ea6925e87.jpeg?w=278&q=80',
    // 'https://s3-image.yeomi.travel/8b592c53-1c3d-4e42-b11a-e793473a3341.jpeg?w=278&q=80',
  ],
  like: 3,
  reply: 5,
};

export default Card;
