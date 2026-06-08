import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import Hero from "../components/Hero";

// =========================
// USER TYPE
// =========================

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

function Home() {

  // =========================
  // USER STATE
  // =========================

  const [user, setUser] =
    useState<User | null>(null);

  // =========================
  // FETCH PROFILE
  // =========================

  useEffect(() => {

    const fetchProfile =
      async () => {

        // token from localStorage
        const token =
          localStorage.getItem(
            "token"
          );

        // no token
        if (!token) return;

        try {

          const response =
            await fetch(
              "http://localhost:5000/api/auth/profile",
              {
                method: "GET",

                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          const data =
            await response.json();

          console.log(data);

          // save user
          setUser(data.user);

        } catch (error) {
          console.log(error);
        }
      };

    fetchProfile();

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      {/* USER WELCOME */}

      {user && (

        <div
          style={{
            backgroundColor: "#413f3f",
            color: "#fff",
            padding: "15px 20px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <h2>
            Welcome, {user.name} 👋
          </h2>
        </div>

      )}

      {/* HERO */}

      <Hero />

      {/* LOGIN LINK */}

      {!user && (

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <Link to="/login">
            Go To Login
          </Link>
        </div>

      )}

    </div>
  );
}

export default Home;