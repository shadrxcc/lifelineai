import { redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function CheckAuth() {
  const { user } = useAuth();
  if (!user && user === null) {
    return redirect("/login");
  }
}
