import React from 'react';

const NAVIGATION = [
  {
    id: 0,
    title: '홈',
    icon: 'h',
    to: '/',
  },
  {
    id: 1,
    title: '토픽',
    icon: 't',
    to: '/',
  },
  {
    id: 2,
    title: '알림',
    icon: 'a',
    to: '/',
  },
  {
    id: 3,
    title: '-',
    icon: '',
  },
  {
    id: 4,
    title: '글쓰기',
    icon: 'w',
    to: '/',
  },
];

const Header = () => {
  /* Router */
  /* State */
  const navigation = NAVIGATION.map((item) => {
    const { id, title, icon, to } = item;
    return (
      <div key={id} className={`navigation-item ${to && 'link'}`}>
        {icon && `${icon} `}
        {title}
      </div>
    );
  });
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="header-container">
      <div className="logo">LOGO</div>
      <div className="navigation">{navigation}</div>
      <div className="profile">
        <div className="profile-wrapper">O</div>
      </div>
    </div>
  );
};

export default Header;
