import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import { Main } from './pages';

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
        <Route path="/topic" element={<Main />} />
        <Route path="/notification" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
