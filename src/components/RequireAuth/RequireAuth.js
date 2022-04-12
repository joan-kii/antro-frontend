import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '@utils';

const RequireAuth = ({ children }) => {

  const { currentUser } = useContext(Context);
  
  return currentUser ? children : 
    <Navigate to='/access' replace />
};

export { RequireAuth };
