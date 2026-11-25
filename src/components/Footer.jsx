import bookmarkIcon from "../assets/icons/bookmark 1.svg";
import earth from "../assets/icons/earth.svg";
import facebook from "../assets/icons/facebook2.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twittwr.svg";
import youtube from "../assets/icons/youtube.svg";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "370px",
        background: "#332548",
        color: "white",
        padding: "120px 60px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <img src={bookmarkIcon} width="28" />
          <span>Bookshop</span>
          <span>Home</span>
          <span>Books</span>
          <span>About Us</span>
        </div>

        <div style={{ display: "flex", gap: "18px" }}>
          <img src={facebook} width="24" />
          <img src={instagram} width="24" />
          <img src={youtube} width="24" />
          <img src={twitter} width="24" />
        </div>
      </div>

      <hr style={{ opacity: 0.2 }} />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Developed By EraaSoft ©2024</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <img src={earth} width="24" />
          <span>English</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;