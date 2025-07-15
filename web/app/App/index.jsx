// import "@/lib/firebase";
import "@/assets/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    // <UserProvider>
    <RouterProvider router={router} />
    // </UserProvider>
  );
}
