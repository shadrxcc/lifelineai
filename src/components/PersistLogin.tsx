import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UseRefreshToken from "../hooks/UseRefreshToken";
import { useAuth } from "../context/AuthContext";

const PersistLogin = () => {
  const refresh = UseRefreshToken();
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyToken() : setIsLoading(false);
  }, []);
  return <>{isLoading ? null : <Outlet />}</>;
};

export default PersistLogin;
