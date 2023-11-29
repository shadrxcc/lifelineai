import React, { createContext, useContext, useEffect, useState } from "react";
import { userInfoType } from "../@types/index.d";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: userInfoType | null;
  isLoggedIn: boolean;
  login: (user_info: userInfoType) => void;
  logout: () => void;
  auth: AuthType; // Use the AuthType here
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}

interface AuthType {
  user: userInfoType | null;
  accessToken?: string; // Add this if you're storing an access token
}


type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<userInfoType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [auth, setAuth] = useState<AuthType>({
    user: null,
    accessToken: undefined
  });
  
  const navigate = useNavigate();

  const login = (user_info: userInfoType) => {
    setUser(user_info);
    setIsLoggedIn(true);
    localStorage.setItem("userInfo", JSON.stringify(user_info));
    localStorage.setItem("loginStatus", JSON.stringify(true))
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const userStatus = localStorage.getItem("loginStatus")
    if (storedUserInfo && userStatus) {
      const parsedUserInfo = JSON.parse(storedUserInfo) as userInfoType;
      const status = JSON.parse(userStatus) as boolean
      setUser(parsedUserInfo);
      setIsLoggedIn(status);
    }
  }, [isLoggedIn]);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userInfo");
    navigate(`/login`);
  };

  return (
    <AuthContext.Provider value={{ user, login, auth, setAuth, isLoggedIn, logout }}>
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
