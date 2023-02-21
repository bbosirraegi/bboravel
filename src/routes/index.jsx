import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components';
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
        <Route path="/board" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
