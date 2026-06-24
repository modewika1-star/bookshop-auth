import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });

  const submit = () => {
    if (!form.first || !form.last || !form.email || !form.password || !form.confirm) {
      alert("Fill all fields");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <HeroSection />

      <div style={{ width: "576px", margin: "60px auto" }}>
        <input placeholder="First Name" style={box} />
        <input placeholder="Last Name" style={{ ...box, marginTop: "20px" }} />
        <input placeholder="Email" style={{ ...box, marginTop: "20px" }} />
        <input placeholder="Password" style={{ ...box, marginTop: "20px" }} />
        <input placeholder="Confirm Password" style={{ ...box, marginTop: "20px" }} />

        <button onClick={submit} style={btn}>
          Sign Up
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
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  borderRadius: "8px",
  marginTop: "20px",
};

export default SignUp;