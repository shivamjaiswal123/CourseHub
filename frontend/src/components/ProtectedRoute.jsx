import React from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../store/atoms/auth.atom';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const auth = useRecoilValue(authState);
  return <div>{auth ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
