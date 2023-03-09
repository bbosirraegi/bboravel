import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from 'utils/TitleManager';

const Header = ({ pathname }) => {
  const navigate = useNavigate();
  /* Router */
  /* State */
  /* Functions */
  const handlePage = (item) => {
    const { to, clicked } = item;
    if (clicked) {
      clicked(() => {
        console.log(1);
      });
      return;
    }
    navigate(to);
  };
  /* Hooks */

  /* Render */
  const navigation = NAVIGATION.map((item) => {
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
      <div className="logo">BBORAVEL</div>
      <div className="navigation">{navigation}</div>
      <div className="profile">
        <div className="profile-wrapper">O</div>
      </div>
    </div>
  );
};

export default Header;
