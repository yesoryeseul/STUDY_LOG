import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import MainPage from "../pages/main";
import LoginForm from "../pages/auth/id-pw-form";
import EmailForm from "../pages/auth/email-form";
import PhoneForm from "../pages/auth/phone-form";
import CompleteAuth from "../pages/auth/complete-auth";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/email",
        element: <EmailForm />,
      },
      {
        path: "/phone",
        element: <PhoneForm />,
      },
      {
        path: "/complete",
        element: <CompleteAuth />,
      },
    ],
  },
]);
export default router;
