import React from 'react';
import { Profile } from '../interfaces/profile';

export interface AuthState {
  authenticated: boolean;
  profile?: Profile;
}

export const AuthDefaultState: AuthState = {
  authenticated: false,
};

type ReactContext = { state: AuthState, dispatch: React.Dispatch<any> };

const AuthContext = React.createContext<ReactContext>({
  state: AuthDefaultState,
  dispatch: () => {},
});

export default AuthContext;
