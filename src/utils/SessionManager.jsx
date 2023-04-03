import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const SessionContext = createContext(null);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('Cannot find SessionContext');
  }
  return context;
};

const SessionManager = ({ children }) => {
  /* Router */
  /* State */
  const [session, setSession] = useState(null);

  /* Functions */
  /* Hooks */
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setSession({
          user_nm: user.displayName,
          user_id: user.uid,
          thumbnail: user.photoURL,
        });
        console.log(user);
      } else {
        setSession(null);
      }
    });
  }, []);
  /* Render */
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionManager;
