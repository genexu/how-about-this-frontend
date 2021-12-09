import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initState = {
  token: null,
  expiresAt: null,
};

export const actions = {
  SET_AUTH_DATA: 'SET_AUTH_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_AUTH_DATA:
      const { token, expiresAt } = action.payload;
      return {
        ...state,
        token,
        expiresAt,
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
