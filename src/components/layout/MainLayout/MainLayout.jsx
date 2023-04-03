import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION, useTitle } from 'utils/TitleManager';
import CenterTitle from './CenterTitle';
import Header from './Header';
import './main-layout.css';
import SideContent from './SideContent';
import { useLoading } from 'utils/LoadingManager';

const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handleLoadingTimer } = useLoading();
  // const {} = useTitle();
  /* Router */
  /* State */
  const [title, setTitle] = useState(<>커뮤니티</>);

  /* Functions */
  /* Hooks */
  useEffect(() => {
    handleLoadingTimer(1000);
    if (pathname) {
      const [, ...cond] = pathname.split('/');
      const [temp] = NAVIGATION.filter((item) => {
        const { to } = item;
        if (cond.length >= 2) {
          return pathname.includes(to);
        }
        return to === pathname;
      });

      setTitle(temp);
    }
  }, [pathname]);

  /* Render */
  return (
    <div className="main-layout">
      <div className="left">
        <Header navigate={navigate} pathname={pathname} />
      </div>
      <div className="center">
        <CenterTitle
          navigate={navigate}
          title={title.centerTItle}
          back={title.back}
        />
        <Outlet />
      </div>
      <div className="right">
        <SideContent />
      </div>
    </div>
  );
};

export default MainLayout;
