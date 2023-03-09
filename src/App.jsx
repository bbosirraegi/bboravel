import React, { useEffect } from 'react';
import WriteLayout from './components/layout/WriteLayout';
import Loading from './components/Loading';
import IndexRouter from './routes';
import { useLoading } from './utils/LoadingManager';

const App = () => {
  const { handleLoadingTimer } = useLoading();
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  useEffect(() => {
    handleLoadingTimer(1000);
  }, []);

  /* Render */
  return (
    <>
      <WriteLayout />
      <Loading />
      <div className="app-container">
        <IndexRouter />
      </div>
    </>
  );
};

export default App;
