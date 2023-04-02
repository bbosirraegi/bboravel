import React, { createContext, useContext, useState } from 'react';

import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

const TitleContext = createContext(null);

export const NAVIGATION = [
  {
    id: 0,
    title: '홈',
    centerTItle: '커뮤니티',
    icon: <AiOutlineHome size={30} />,
    iconFill: <AiFillHome size={30} />,
    to: '/',
    display: true,
    back: false,
  },
  {
    id: 1,
    title: '토픽',
    centerTItle: '토픽',
    icon: <AiOutlineMessage size={30} />,
    iconFill: <AiFillMessage size={30} />,
    to: '/topic',
    display: true,
    back: true,
  },
  {
    id: 2,
    title: '알림',
    centerTItle: '알림',
    icon: <AiOutlineBell size={30} />,
    iconFill: <AiFillBell size={30} />,
    to: '/notification',
    display: true,
    back: true,
  },
  {
    id: 3,
    title: '-',
    icon: '',
    display: true,
  },
  {
    id: 4,
    title: '글쓰기',
    icon: <AiOutlinePlusCircle size={30} />,
    iconFill: <AiFillPlusCircle size={30} />,
    to: '/write',
    clicked: (c) => {
      if (c) c();
    },
    display: true,
  },
  {
    id: 5,
    title: '마이페이지',
    centerTItle: '마이페이지',
    icon: <AiOutlinePlusCircle size={30} />,
    iconFill: <AiFillPlusCircle size={30} />,
    to: '/mypage',
    display: false,
  },
  {
    id: 6,
    title: '',
    centerTItle: '커뮤니티',
    icon: <AiOutlinePlusCircle size={30} />,
    iconFill: <AiFillPlusCircle size={30} />,
    to: '/community/',
    display: false,
    back: true,
  },
];

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('Cannot find TitleContext');
  }
  return context;
};

const TitleManager = ({ children }) => {
  /* Router */
  /* State */
  const [title, setTitle] = useState();
  /* Functions */
  const handleLoading = (val = true) => {
    setIsLoading(val);
  };
  const handleLoadingTimer = (timer = 3000, callback = null) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) {
        callback();
      }
    }, timer);
  };
  /* Hooks */
  /* Render */
  return (
    <TitleContext.Provider
      value={{ isLoading, handleLoading, handleLoadingTimer }}
    >
      {children}
    </TitleContext.Provider>
  );
};

export default TitleManager;
