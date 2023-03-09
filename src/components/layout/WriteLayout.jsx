import React, { useState } from 'react';
import { useWrite } from 'utils/WriteManager';
import './write-layout.css';

const WriteLayout = () => {
  const { isWrite } = useWrite();
  /* Router */
  /* State */
  const initialState = {
    title: '',
    content: '',
  };
  const [write, setWrite] = useState(initialState);
  /* Functions */
  /* Hooks */
  /* Render */
  return isWrite && <div className="write-layout-container"></div>;
};

export default WriteLayout;
