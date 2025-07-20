import { Outlet } from "react-router-dom";
import NavPane from "./NavPane";

export default function DashboardLayout() {
  return (
    <div className="w-dvw h-dvh bg-base-200 flex">
      <NavPane />
      <Outlet />
    </div>
  );
}
