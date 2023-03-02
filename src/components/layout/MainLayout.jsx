import React from 'react';
import { Outlet } from 'react-router-dom';
import CenterTitle from './CenterTitle';
import Header from './Header';
import './main-layout.css';
import SideContent from './SideContent';

const MainLayout = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="main-layout">
      <div className="left">
        <Header />
      </div>
      <div className="center">
        <CenterTitle />
        <Outlet />
      </div>
      <div className="right">
        <SideContent />
      </div>
    </div>
  );
};

export default MainLayout;
