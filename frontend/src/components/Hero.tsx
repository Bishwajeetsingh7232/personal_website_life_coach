const Hero = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        backgroundColor: "#f3f0f0ff",
         boxShadow: "0px 10px 30px rgba(231, 40, 40, 0.1)",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          maxWidth: "520px",
        }}
      >
        <p
          style={{
            color: "#888",
            marginBottom: "12px",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Software Developer · Deep Thinker · Life Coach
        </p>

        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            lineHeight: "1.2",
            color: "#1a1a1a",
          }}
        >
          True Growth
          Begins in
          the Mind.
        </h1>

        <p
          style={{
            fontSize: "17px",
            marginBottom: "12px",
            color: "#444",
            lineHeight: "1.7",
          }}
        >
          I am a software developer, deep thinker, and life coach
          passionate about helping people grow mentally and emotionally.
        </p>

        <p
          style={{
            fontSize: "17px",
            marginBottom: "30px",
            color: "#555",
            lineHeight: "1.7",
          }}
        >
          Through philosophy, deep thinking, and real conversations —
          I help people build clarity, confidence, and direction in life.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          {/* <button
            style={{
              backgroundColor: "#1a1a1a",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Explore Books
          </button> */}

          <button
            style={{
              backgroundColor: "white",
              color: "#1a1a1a",
              padding: "14px 28px",
              border: "1px solid #1a1a1a",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Book a Session
          </button>
        </div>
      </div>

      {/* Right Side — author portrait */}
      <img
        src="/bishwa.jpg"
        alt="Philosopher and Life Coach"
        style={{
          width: "380px",
          height: "460px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </section>
  );
};

export default Hero;