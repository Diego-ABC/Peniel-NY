import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import SignIn from "./features/auth/pages/SignIn";
import RequireAuth from "./features/auth/guards/RequireAuth";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  ),
  { basename: import.meta.env.VITE_APP_BASE_PATH }
);
