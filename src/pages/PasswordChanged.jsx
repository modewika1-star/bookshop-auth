import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/icons/check.svg";

function PasswordChanged() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "576px",
          height: "636px",
          background: "white",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <img src={checkIcon} width="160" />

        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px" }}>Password changed!</h1>

          <p
            style={{
              marginTop: "16px",
              color: "#888",
              fontSize: "28px",
            }}
          >
            Your password has been
            <br />
            changed successfully
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          style={{
            width: "576px",
            height: "48px",
            background: "#E91E63",
            color: "white",
            borderRadius: "8px",
            fontSize: "30px",
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default PasswordChanged;