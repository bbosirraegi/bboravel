import React, { useEffect } from 'react';
import Loading from './components/Loading';
import IndexRouter from './routes';
import { useLoading } from './utils/LoadingManager';
import ModalLayout from 'components/layout/ModalLayout/ModalLayout';
import { useWrite } from 'utils/WriteManager';
import Write from 'components/Write/Write';

const App = () => {
  const { handleLoadingTimer } = useLoading();
  /* Router */
  /* State */
  const { isWrite, handleIsWrite } = useWrite();
  /* Functions */
  /* Hooks */
  useEffect(() => {
    handleLoadingTimer(1000);
  }, []);

  /* Render */
  return (
    <>
      <ModalLayout title="글쓰기" modal={isWrite} setModal={handleIsWrite}>
        <Write />
      </ModalLayout>
      <Loading />
      <div className="app-container">
        <IndexRouter />
      </div>
    </>
  );
};

export default App;
