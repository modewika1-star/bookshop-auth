import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateNewPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const submit = () => {
    if (!password || !confirm) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    navigate("/password-changed");
  };

  return (
    <>
      <HeroSection />

      <div
        style={{
          width: "576px",
          margin: "80px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#E91E63",
            marginBottom: "20px",
          }}
        >
          Create new password!
        </h2>

        <p>Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={box}
        />

        <p style={{ marginTop: "20px" }}>Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          style={box}
        />

        <button onClick={submit} style={btn}>
          Reset Password
        </button>
      </div>

      <Footer />
    </>
  );
}

const box = {
  width: "576px",
  height: "54px",
  padding: "16px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  borderRadius: "8px",
  marginTop: "25px",
};

export default CreateNewPassword;