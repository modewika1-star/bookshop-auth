import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetCode from "./pages/ResetCode";
import CreateNewPassword from "./pages/CreateNewPassword";
import PasswordChanged from "./pages/PasswordChanged";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-code" element={<ResetCode />} />
        <Route path="/create-password" element={<CreateNewPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;