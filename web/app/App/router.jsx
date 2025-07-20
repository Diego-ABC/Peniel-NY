import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import SignIn from "./features/auth/pages/SignIn";
import RequireAuth from "./features/auth/guards/RequireAuth";
import signInAction from "./features/auth/services/signInAction";
import signOutLoader from "./features/auth/services/signOutLoader";
import NotFound from "./layout/NotFoundPage";
import homeRedirectLoader from "./layout/DashboardLayout/homeRedirectLoader";
import DirectoryHome from "./features/directory/pages/DirectoryHome";

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
      >
        <Route index loader={homeRedirectLoader} />
        <Route path="directory" element={<DirectoryHome />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="/signin"
        element={<SignIn />}
        action={signInAction}
        loader={signOutLoader}
      />
    </Route>
  ),
  { basename: import.meta.env.VITE_APP_BASE_PATH }
);
