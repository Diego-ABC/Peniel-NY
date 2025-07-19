import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/signin" />;
  return <>{children}</>;
}
