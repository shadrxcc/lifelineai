import React, { createContext, useContext, useState } from "react";
import { userInfoType } from "../@types/index.d";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: userInfoType | null;
  logout: () => void;
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}

interface AuthType {
  user: userInfoType | null;
  accessToken?: string;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<userInfoType | null>(null);
  const [auth, setAuth] = useState<AuthType>({
    user: null,
    accessToken: undefined,
  });

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate(`/login`);
  };

  return (
    <AuthContext.Provider value={{ user, auth, setAuth, logout }}>
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
