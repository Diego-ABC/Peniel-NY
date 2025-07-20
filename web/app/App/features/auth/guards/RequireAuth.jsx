import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
  const { isLoggedIn, checkedAuthState } = useAuth();
  if (!checkedAuthState) return null;
  if (!isLoggedIn) return <Navigate to="/signin" />;

  return <>{children}</>;
}
