import { Link } from "react-router-dom";
import bookmarkIcon from "../assets/icons/bookmark 1.svg";

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "92px",
        padding: "24px 140px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        background: "rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <img src={bookmarkIcon} width="28" />
          <span style={{ color: "white", fontSize: "30px" }}>Bookshop</span>
        </div>

        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/" style={{ color: "white" }}>Books</Link>
        <Link to="/" style={{ color: "white" }}>About us</Link>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/">
          <button
            style={{
              width: "79px",
              height: "44px",
              borderRadius: "8px",
              background: "#E91E63",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Log in
          </button>
        </Link>

        <Link to="/signup">
          <button
            style={{
              width: "91px",
              height: "44px",
              borderRadius: "8px",
              background: "white",
              color: "#E91E63",
              border: "1px solid #E91E63",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;