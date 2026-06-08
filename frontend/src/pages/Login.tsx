import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const response = await fetch("https://personal-website-life-coach.onrender.com/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      // API error
      if (!response.ok) {
        setError(data.error);

        setLoading(false);

        return;
      }

      // save token
      localStorage.setItem("token", data.token);

      // save user
      localStorage.setItem("user", JSON.stringify(data.user));

      setLoading(false);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong");

      setLoading(false);
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },

    card: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },

    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center" as const,
      color: "#111",
    },

    subHeading: {
      textAlign: "center" as const,
      color: "#666",
      marginBottom: "30px",
      fontSize: "15px",
    },

    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "18px",
    },

    inputGroup: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "8px",
    },

    label: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#333",
    },

    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "15px",
      outline: "none",
    },

    button: {
      marginTop: "10px",
      padding: "14px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#111",
      color: "#fff",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
    },

    footerText: {
      marginTop: "20px",
      textAlign: "center" as const,
      fontSize: "14px",
      color: "#666",
    },

    link: {
      color: "#111",
      fontWeight: 600,
      textDecoration: "none",
      marginLeft: "5px",
    },
  };

  return (
    <div style={styles.page}>
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          textDecoration: "none",
          color: "#111",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        ← Back to Home
      </Link>

      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome Back</h1>

        <p style={styles.subHeading}>
          Login to continue your journey with Bishwa
        </p>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={styles.footerText}>
          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}
          Don't have an account?
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
