const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "50px 40px",
        marginTop: "60px",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Bishwa — The Deep Dev</h2>

      <p style={{ color: "#aaa", maxWidth: "480px", lineHeight: "1.7", marginBottom: "30px", fontSize: "15px" }}>
        Software developer · deep thinker · life coach.
        Helping people build clarity, confidence, and direction —
        through philosophy, real conversations, and intentional growth.
      </p>

      {/* <div
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <p style={{ cursor: "pointer", color: "#ccc" }}>Home</p>
        <p style={{ cursor: "pointer", color: "#ccc" }}>Sessions</p>
        <p style={{ cursor: "pointer", color: "#ccc" }}>About</p>
        <p style={{ cursor: "pointer", color: "#ccc" }}>Contact</p>
      </div> */}

      <p style={{ color: "#555", fontSize: "13px" }}>
        © 2026 Bishwa — The Deep Dev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;