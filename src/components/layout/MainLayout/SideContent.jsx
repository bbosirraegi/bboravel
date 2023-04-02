import { Avatar, BestList } from 'components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { auth } from 'utils/firebase';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

const SideContent = ({ side }) => {
  const collapse = useRef();
  /* Router */
  /* State */
  const [userObj, setUserObj] = useState(null);
  const [isCollapse, setIsCollapse] = useState(false);
  /* Functions */

  const handleFold = useCallback(() => {
    if (!collapse.current) {
      return;
    }
    if (isCollapse) {
      collapse.current.style.height = 0;
    } else {
      collapse.current.style.height = `165px`;
    }
    setIsCollapse(!isCollapse);
  }, [isCollapse]);

  /* Hooks */
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          user_nm: user.displayName,
          user_id: user.uid,
          thumbnail: user.photoURL,
        });
        console.log(user);
      } else {
        setUserObj(null);
      }
    });
  }, []);
  /* Render */
  return (
    userObj && (
      <div className="sidebar-container">
        <div className="banner">Banner</div>
        <div className="search">
          <div className="search-icon">
            <CiSearch size={24} />
          </div>
          <input
            type="text"
            className="search-text"
            placeholder="어떤 여행이 궁금하신가요?"
          />
        </div>
        {side ? (
          <div className="my-info-container">
            <Avatar thumbnail={userObj.thumbnail} char={userObj.user_nm} />
            <div className="my-name">{userObj.user_nm}</div>
            <div className="my-board">
              <strong>1</strong> 게시물
            </div>
            <div className="my-change">내 정보 수정</div>
          </div>
        ) : (
          <BestList />
        )}

        <div className="footer">
          <div className="terms-container">
            <Link>개인정보처리 방침</Link>
            <div>|</div>
            <Link>이용약관</Link>
            <div>|</div>
            <Link>서비스 정보 수신 동의</Link>
          </div>
          <div className="company-container">
            <div className="company-tilte" onClick={handleFold}>
              OngDV &nbsp;
              {isCollapse ? (
                <MdOutlineKeyboardArrowUp size={25} />
              ) : (
                <MdOutlineKeyboardArrowDown size={25} />
              )}
            </div>
            <div className="company-info" ref={collapse}>
              <div>주식회사 오엔지디브이(OngDV Corp.)</div>
              <div>이메일 : ongdv@ongdv.dev</div>
              <div>사업자등록번호 : 000 - 00 - 00000 </div>
              <div>이름 : 오경우 </div>
              <div>직책 : 개인정보 보호책임자 </div>
              <div>메일 : ongdv@ongdv.dev </div>
              <div>
                주소 : 부산광역시 금정구 부산대학로63번길 2 (장전동) 제6공학관
                6405-1호
              </div>
              <div>통신판매업번호 : 0000 - 부산금정 - 00000</div>
            </div>
          </div>
          <div className="sns-conatiner">
            <AiOutlineInstagram size={32} cursor="pointer" />
            <BsFacebook size={24} cursor="pointer" />
            <AiFillYoutube size={36} cursor="pointer" />
            <FaTiktok size={24} cursor="pointer" />
          </div>
        </div>
      </div>
    )
  );
};

export default SideContent;
