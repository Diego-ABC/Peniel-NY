import { Outlet } from "react-router-dom";
import NavPane from "./NavPane";

export default function DashboardLayout() {
  return (
    <div className="w-dvw h-dvh bg-base-200 flex">
      <NavPane />
      <div className="grow basis-0 shrink-0 h-full overflow-auto">
        <div className="p-5 min-w-full min-h-full w-fit">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
