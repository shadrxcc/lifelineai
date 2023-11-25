// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {  userInfoType } from "../@types/index.d";

interface AuthContextType {
  user: userInfoType | null;
  isLoggedIn: boolean;
  login: (user_info: userInfoType) => void;
  logout: () => void;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<userInfoType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (user_info: userInfoType) => {
    setUser(user_info);
    setIsLoggedIn(true);
    localStorage.setItem("userInfo", JSON.stringify(user_info));
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo) as userInfoType;
      setUser(parsedUserInfo);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, login, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
