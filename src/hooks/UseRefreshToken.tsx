import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { BASE_URL, ENDPOINTS } from "../config";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const res = await axios.get(`${BASE_URL}/${ENDPOINTS.refresh_Token}`, {
      withCredentials: true,
    });

    setAuth((prevAuth) => ({
      ...prevAuth,
      accessToken: res.data.accessToken,
    }));
    return res.data.accessToken
  };
  return refresh;
};

export default UseRefreshToken;
