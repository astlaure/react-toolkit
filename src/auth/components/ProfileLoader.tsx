import React, { useContext, useEffect, useState } from 'react';
import useHttpClient from '../../core/useHttpClient';
import AuthContext from '../contexts/AuthContext';

export interface Props {
  url: string;
  type: string;
  children: React.ReactElement;
}

function ProfileLoader(props: Props) {
  const { children, url, type } = props;

  const httpClient = useHttpClient();
  const [isLoaded, setLoaded] = useState(false);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    httpClient.get(url)
      .then((payload) => dispatch({ type, payload }))
      .catch(() => {})
      .then(() => setLoaded(true));
  }, []);

  return isLoaded ? children : null;
}

export default ProfileLoader;
