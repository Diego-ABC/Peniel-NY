import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="w-dvw min-h-dvh bg-base-200">
      <Outlet />
    </div>
  );
}
