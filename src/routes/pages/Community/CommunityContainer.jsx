import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from 'utils/firebase';
import CommunityPresenter from './CommunityPresenter';
import { v4 } from 'uuid';
import { useSession } from 'utils/SessionManager';
import moment from 'moment';

const CommunityContainer = () => {
  /* Router */
  const { community_id } = useParams();
  /* State */
  const [community, setCommunity] = useState();
  const { session } = useSession();
  console.log(community);

  /* Functions */
  const handleReply = async (reply) => {
    try {
      const newReply = {
        id: v4(),
        content: reply,
        ...session,
        timestamp: moment()._d,
      };
      const _reply = community.reply
        ? [...community.reply, newReply]
        : [newReply];
      const _community = {
        ...community,
        reply: _reply,
      };
      await setDoc(doc(db, 'community', community.id), _community);
      handleCommunity();
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleCommunity = async () => {
    await getDocs(collection(db, 'community')).then((querySnapshot) => {
      const [newData] = querySnapshot.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((item) => item.id === community_id);

      setCommunity(newData);
    });
  };

  /* Hooks */
  useEffect(() => {
    handleCommunity();
  }, []);
  /* Render */
  return (
    community && (
      <CommunityPresenter community={community} createReply={handleReply} />
    )
  );
};

export default CommunityContainer;
