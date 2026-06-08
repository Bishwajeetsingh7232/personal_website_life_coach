import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const navigate = useNavigate();
  // =========================
  // FORM STATES
  // =========================

  const [name, setName] = useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  // error state
  const [error, setError] =
    useState("");

  // loading state
  const [loading, setLoading] =
    useState(false);

  // =========================
  // HANDLE SIGNUP
  // =========================

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // password validation
    if (
      password !== confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );

      return;
    }

    // clear old errors
    setError("");

    // start loading
    setLoading(true);

    // API delay
try {
  const response = await fetch(
    "https://personal-website-life-coach.onrender.com/api/auth/signup",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data =
    await response.json();

  // if API error
  if (!response.ok) {
    setError(data.error);
    setLoading(false);
    return;
  }

  localStorage.setItem(
  "token",
  data.token
);

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);

  // success
navigate("/");

  setLoading(false);

} catch (error) {
   console.log(error);
  setError(
    "Something went wrong"
  );

  setLoading(false);
}
  };

  // =========================
  // STYLES
  // =========================

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
      maxWidth: "420px",
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow:
        "0 4px 20px rgba(0,0,0,0.1)",
    },

    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center" as const,
      marginBottom: "10px",
      color: "#111",
    },

    subHeading: {
      textAlign: "center" as const,
      color: "#666",
      marginBottom: "30px",
      fontSize: "15px",
    },

    error: {
      backgroundColor: "#ffe5e5",
      color: "#d00000",
      padding: "10px",
      borderRadius: "6px",
      fontSize: "14px",
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
        <h1 style={styles.heading}>
          Create Account
        </h1>

        <p style={styles.subHeading}>
          Start your journey with
          Bishwa
        </p>

        {/* ERROR MESSAGE */}

        {error && (
          <p style={styles.error}>
            {error}
          </p>
        )}

        {/* FORM */}

        <form
          onSubmit={handleSignup}
          style={styles.form}
        >
          {/* NAME */}

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              style={styles.input}
            />
          </div>

          {/* EMAIL */}

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              style={styles.input}
            />
          </div>

          {/* PASSWORD */}

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              style={styles.input}
            />
          </div>

          {/* CONFIRM PASSWORD */}

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              style={styles.input}
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            style={styles.button}
          >
            {loading
              ? "Signing up..."
              : "Signup"}
          </button>
        </form>

        {/* FOOTER */}

        <p style={styles.footerText}>
          Already have an account?
          <Link
            to="/login"
            style={styles.link}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
