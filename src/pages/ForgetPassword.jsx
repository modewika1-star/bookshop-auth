import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!email) {
      alert("Enter email");
      return;
    }
    navigate("/reset-code");
  };

  return (
    <>
      <HeroSection />

      <div style={{ width: "576px", margin: "100px auto" }}>
        <h2 style={{ textAlign: "center", color: "#E91E63" }}>Forget Password?</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={box}
        />

        <button onClick={submit} style={btn}>
          Send reset code
        </button>
      </div>

      <Footer />
    </>
  );
}

const box = {
  width: "576px",
  height: "54px",
  marginTop: "20px",
  padding: "16px",
  borderRadius: "8px",
};

const btn = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  borderRadius: "8px",
  marginTop: "20px",
};

export default ForgetPassword;