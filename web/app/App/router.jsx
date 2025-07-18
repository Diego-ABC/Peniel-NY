import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>crm app site</h1>} />
    </Route>
  ),
  { basename: import.meta.env.VITE_APP_BASE_PATH }
);
