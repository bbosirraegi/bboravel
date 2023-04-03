import React, { useEffect, useState } from 'react';
import { db } from 'utils/firebase';
import MainPresenter from './MainPresenter';
import { collection, getDocs, addDoc, orderBy } from 'firebase/firestore';

const MainContainer = () => {
  /* Router */
  /* State */
  const [community, setCommunity] = useState([]);
  /* Functions */
  const handleCommunity = async () => {
    await getDocs(
      collection(db, 'community'),
      orderBy('timestamp', 'desc')
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // setTodos(newData);

      console.log(newData);
      setCommunity(newData);
    });
  };
  /* Hooks */
  useEffect(() => {
    handleCommunity();
  }, []);

  /* Render */
  return <MainPresenter community={community} />;
};

export default MainContainer;
