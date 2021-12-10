import { createContext, useEffect, useReducer } from 'react';
import { useAbility } from '@casl/react';
import { AbilityContext, updateAbilityByAuthToken, updateAbilityByUser } from '@/utils/ability';
import { setAuthToken } from '@/api/setup';
import { useUserMe } from '@/hooks/queries/user';

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
      setAuthToken({ token });

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
  const ability = useAbility(AbilityContext);

  const { token } = state;
  const { data: user } = useUserMe();

  useEffect(() => {
    if (!token) return;
    updateAbilityByAuthToken(ability, token);
  }, [token]);

  useEffect(() => {
    if (!user) return;
    updateAbilityByUser(ability, user);
  }, [user]);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
