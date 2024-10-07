import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import MainPage from "../pages/main";
import SignUpPage from "../pages/auth/sign-up";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);
export default router;
