import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import MedicalHistory from "./pages/MedicalHistory";
import Register from "./pages/Register";
import { VerifyEmail } from "./pages/Verifyemail";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetLink } from "./pages/ResetLink";
import { ResetPassword } from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    children: [],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "medical-history",
    element: <MedicalHistory />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "verify-email",
    element: <VerifyEmail />,
  },

  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "reset-link",
    element: <ResetLink/>,
  },

  {
    path: "reset-password",
    element: <ResetPassword/>,
  },

  {
    path: "dashboard",
    element: <Dashboard/>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
