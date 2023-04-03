import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION } from 'utils/TitleManager';
import { useWrite } from 'utils/WriteManager';
import LOGO from 'assets/logo.png';
import { Avatar } from 'components';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'utils/firebase';
import { useSession } from 'utils/SessionManager';

const Header = ({ pathname }) => {
  const navigate = useNavigate();
  const { handleIsWrite } = useWrite();
  const { session } = useSession();
  /* Router */
  /* State */
  const navList = NAVIGATION.filter((item) => item.display);
  /* Functions */
  const handlePage = (item) => {
    const { to, clicked } = item;
    if (clicked) {
      clicked(() => {
        handleIsWrite(true);
      });
      return;
    }
    navigate(to);
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  /* Hooks */
  /* Render */
  const navigation = navList.map((item) => {
    const { id, title, icon, iconFill, to } = item;
    const active = to === pathname;
    const i = active ? iconFill : icon;
    return (
      <div
        key={id}
        className={`navigation-item ${to && 'link'}`}
        onClick={() => handlePage(item)}
      >
        <span className={`navigation-icon ${active && 'active'}`}>{i}</span>
        <span className={`navigation-title ${active && 'active'}`}>
          {title}
        </span>
      </div>
    );
  });
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        <img src={LOGO} alt="logo" />
      </Link>
      <div className="navigation">{navigation}</div>
      <div className="profile">
        {session ? (
          <Avatar thumbnail={session.thumbnail} char={session.user_nm} />
        ) : (
          <div onClick={handleLogin}>로그인</div>
        )}
      </div>
    </div>
  );
};

export default Header;
