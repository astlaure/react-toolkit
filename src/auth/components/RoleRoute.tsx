import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

interface Props {
  roles: string[];
  redirect: string;
  children: React.ReactElement;
}

function RoleRoute(props: Props) {
  const { roles, children, redirect } = props;

  const { state } = useContext(AuthContext);
  const location = useLocation();

  return state.authenticated && roles.includes(state.profile?.role || 'NULL')
    ? children
    : <Navigate to={redirect} state={{ from: location }} replace />;
}

export default RoleRoute;
