import React, { createContext, useContext, useState } from 'react';

const WriteContext = createContext(null);

export const useWrite = () => {
  const context = useContext(WriteContext);
  if (!context) {
    throw new Error('Cannot find WriteContext');
  }
  return context;
};

const WriteManager = ({ children }) => {
  /* Router */
  /* State */
  const [isWrite, setIsWrite] = useState(false);
  const initialState = {
    title: '',
    content: '',
  };
  const [write, setWrite] = useState(initialState);

  /* Functions */
  /**
   * 글쓰기 모드 제어
   * @param {*} val
   */
  const handleIsWrite = (val = false) => {
    setIsWrite(val);
  };

  /**
   * 게시글 핸들러
   * --
   * @param {*} e
   */
  const handleWrite = (e) => {
    setWrite({ ...write, [e.target.name]: e.target.value });
  };

  /**
   * 글 업로드
   * --
   * @param {*} writeInfo
   */
  const hnadleUpload = async (writeInfo) => {
    // Do Somethings
  };

  /* Hooks */
  /* Render */
  return (
    <WriteContext.Provider
      value={{ write, isWrite, handleIsWrite, hnadleUpload, handleWrite }}
    >
      {children}
    </WriteContext.Provider>
  );
};

export default WriteManager;
