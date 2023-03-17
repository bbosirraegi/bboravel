import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION } from 'utils/TitleManager';
import CenterTitle from './CenterTitle';
import Header from './Header';
import './main-layout.css';
import SideContent from './SideContent';

const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  /* Router */
  /* State */
  const [title, setTitle] = useState(<>커뮤니티</>);

  /* Functions */
  /* Hooks */
  useEffect(() => {
    if (pathname) {
      const [temp] = NAVIGATION.filter((item) => {
        const { to } = item;
        return to === pathname;
      });

      setTitle(temp.centerTItle);
    }
  }, [pathname]);

  /* Render */
  return (
    <div className="main-layout">
      <div className="left">
        <Header navigate={navigate} pathname={pathname} />
      </div>
      <div className="center">
        <CenterTitle navigate={navigate} title={title} back={true} />
        <Outlet />
      </div>
      <div className="right">
        <SideContent />
      </div>
    </div>
  );
};

export default MainLayout;
