import React, { useMemo, useReducer } from 'react';
import AuthContext, { AuthDefaultState, AuthState } from './AuthContext';
import { Action } from '../../core/interfaces/action';

export interface Props {
  reducer: React.Reducer<AuthState, Action>;
  children: React.ReactElement | React.ReactElement[];
}

function AuthContextProvider(props: Props) {
  const { reducer, children } = props;

  const [state, dispatch] = useReducer(reducer, AuthDefaultState);
  const context = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
