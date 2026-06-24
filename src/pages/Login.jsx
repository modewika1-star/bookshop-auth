import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook.svg";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }
    alert("Logged in");
  };

  return (
    <>
      <HeroSection />

      <div
        style={{
          width: "576px",
          margin: "60px auto",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#E91E63", marginBottom: "40px" }}>
          Welcome Back!
        </h2>

        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          style={{
            width: "576px",
            height: "54px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            margin: "10px 0 20px",
          }}
        />

        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            width: "576px",
            height: "54px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            margin: "10px 0 20px",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Remember me</span>
          <Link to="/forget-password" style={{ color: "#E91E63" }}>
            Forget password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "576px",
            height: "48px",
            background: "#E91E63",
            color: "white",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          Log in
        </button>

        <p style={{ textAlign: "center", margin: "30px 0" }}>
          Don’t have account? <Link to="/signup" style={{ color: "#E91E63" }}>Signup</Link>
        </p>

        <button style={{ width: "576px", height: "48px", borderRadius: "8px", marginBottom: "15px" }}>
          <img src={google} width="20" /> Login with Google
        </button>

        <button style={{ width: "576px", height: "48px", borderRadius: "8px" }}>
          <img src={facebook} width="20" /> Login with Facebook
        </button>
      </div>
          
      <Footer />
    </>
  );
}

export default Login;