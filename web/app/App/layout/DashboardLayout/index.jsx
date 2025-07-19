import useAuth from "@/App/features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/signin" />;
  return (
    <div className="w-dvw min-h-dvh bg-base-200">
      <Outlet />
    </div>
  );
}
