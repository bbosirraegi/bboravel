import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION } from 'utils/TitleManager';
import { useWrite } from 'utils/WriteManager';
import LOGO from 'assets/logo.png';

const Header = ({ pathname }) => {
  const navigate = useNavigate();
  const { handleIsWrite } = useWrite();
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
        <div className="profile-wrapper">O</div>
      </div>
    </div>
  );
};

export default Header;
