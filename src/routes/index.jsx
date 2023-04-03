import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import { Community, Main, Notification, Topic } from './pages';

const IndexRouter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/community/:community_id" element={<Community />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/notification" element={<Notification />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
