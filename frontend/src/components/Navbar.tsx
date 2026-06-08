import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        borderBottom: "1px solid #333",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "white",
          letterSpacing: "1px",
        }}
      >
        Bishwa — The Deep Dev
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "28px",
        }}
      >
        <Link to="/" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link>
        <Link to="/sessions" style={{ color: "#ccc", textDecoration: "none" }}>Sessions</Link>
        <Link to="/about" style={{ color: "#ccc", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "#ccc", textDecoration: "none" }}>Contact</Link>
      </div>

      {/* Auth */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {/* Sign In — plain text */}
        <Link
          to="/login"
          style={{
            color: "#ccc",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Sign In
        </Link>

        {/* Get Started — dark button with gold text */}
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            backgroundColor: "#111",
            color: "#f0a500",
            fontWeight: "bold",
            fontSize: "15px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #333",
          }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;