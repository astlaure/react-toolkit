import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

interface Props {
  redirect: string;
  children: React.ReactElement;
}

function PrivateRoute(props: Props) {
  const { children, redirect } = props;

  const { state } = useContext(AuthContext);
  const location = useLocation();

  return state.authenticated
    ? children
    : <Navigate to={redirect} state={{ from: location }} replace />;
}

export default PrivateRoute;
