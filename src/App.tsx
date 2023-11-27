import {
  Route,
  Routes
} from "react-router-dom";
import Login from "./pages/Login";
import MedicalHistory from "./pages/MedicalHistory";
import Register from "./pages/Register";
import { VerifyEmail } from "./pages/Verifyemail";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetLink } from "./pages/ResetLink";
import { ResetPassword } from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
// import Hospital from "./components/Hospital";
// import MainComponent from "./components/Hospital";
// import ArticleList from "./components/Hospital";
import MedicalJournalsList from "./components/Hospital";


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link" element={<ResetLink />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hospital" element={<MedicalJournalsList/>} />
      </Routes>
    </>
  );
}
