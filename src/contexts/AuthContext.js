import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import * as authApi from "../apis/auth-api";

import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  console.log(authenticatedUser);

  const [openLogin, setOpenLogin] = useState(false);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    console.log(res);
    console.log(res.data.accessToken);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, authenticatedUser, logout, openLogin, setOpenLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
