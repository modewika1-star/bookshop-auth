import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function ResetCode() {
  const navigate = useNavigate();

  const [code, setCode] = useState(["", "", "", ""]);

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const refs = [input1, input2, input3, input4];

  function handleChange(value, index) {
    // يقبل أرقام فقط
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // يروح للمربع اللي بعده تلقائي
    if (value && index < 3) {
      refs[index + 1].current.focus();
    }
  }

  function handleSubmit() {
    if (code.some((num) => num === "")) {
      alert("Please enter full code");
      return;
    }

    navigate("/create-password");
  }

  return (
    <>
      <HeroSection />

      <div
        style={{
          width: "576px",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#E91E63", marginBottom: "20px" }}>
          Reset your password!
        </h2>

        <p style={{ marginBottom: "30px", color: "#666" }}>
          Enter the 4 digit code sent to your email
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "30px",
          }}
        >
          <input
            ref={input1}
            maxLength={1}
            value={code[0]}
            onChange={(e) => handleChange(e.target.value, 0)}
            style={box}
          />

          <input
            ref={input2}
            maxLength={1}
            value={code[1]}
            onChange={(e) => handleChange(e.target.value, 1)}
            style={box}
          />

          <input
            ref={input3}
            maxLength={1}
            value={code[2]}
            onChange={(e) => handleChange(e.target.value, 2)}
            style={box}
          />

          <input
            ref={input4}
            maxLength={1}
            value={code[3]}
            onChange={(e) => handleChange(e.target.value, 3)}
            style={box}
          />
        </div>

        <button onClick={handleSubmit} style={buttonStyle}>
          Continue
        </button>
      </div>

      <Footer />
    </>
  );
}

const box = {
  width: "60px",
  height: "60px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "24px",
};

const buttonStyle = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  borderRadius: "8px",
};

export default ResetCode;