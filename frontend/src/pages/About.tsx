const About = () => {
  const skills = [
    {
      icon: "💻",
      title: "Software Developer",
      description:
        "I build real-world applications and think deeply about how technology can serve people — not the other way around.",
    },
    {
      icon: "🧠",
      title: "Deep Thinker",
      description:
        "I believe most problems in life are solved not by working harder, but by thinking clearer. Philosophy is my tool.",
    },
    {
      icon: "🌱",
      title: "Life Coach",
      description:
        "I help people gain clarity, build confidence, and find direction — through honest conversations and practical thinking.",
    },
  ];

  const values = [
    { label: "Clarity over confusion" },
    { label: "Depth over speed" },
    { label: "Growth over comfort" },
    { label: "Action over perfection" },
    { label: "Honesty over flattery" },
    { label: "Purpose over busyness" },
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

      {/* HERO BANNER */}
      <div
        style={{
          position: "relative",
          height: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format"
          alt="About background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, color: "white" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>About Bishwajeet</h1>
          <p style={{ fontSize: "16px", color: "#ccc" }}>
            Developer · Thinker · Coach
          </p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          padding: "70px 60px",
          backgroundColor: "#fff",
        }}
      >
        {/* Photo */}
        <img
          src="/bishwa.jpg"
          alt="Bishwajeet Singh"
          style={{
            width: "300px",
            height: "360px",
            objectFit: "cover",
            borderRadius: "16px",
            flexShrink: 0,
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
        />

        {/* Text */}
        <div>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#f0a500",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            Hi, I'm
          </p>
          <h2 style={{ fontSize: "38px", color: "#1a1a1a", marginBottom: "16px" }}>
            Bishwajeet Singh
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "16px",
              maxWidth: "540px",
            }}
          >
            I am a software developer, deep thinker, and life coach passionate
            about helping people grow mentally and emotionally.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "540px",
            }}
          >
            I believe true growth begins in the mind. Through deep thinking,
            philosophy, and real conversations, I help people build clarity,
            confidence, and direction in life.
          </p>
        </div>
      </div>

      {/* WHAT I DO — 3 CARDS */}
      <div style={{ backgroundColor: "#f4f4f4", padding: "60px 60px" }}>
        <h2
          style={{
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "40px",
            color: "#1a1a1a",
          }}
        >
          What I Do
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px 24px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
              }}
            >
              <p style={{ fontSize: "36px", marginBottom: "14px" }}>{skill.icon}</p>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1a1a1a" }}>
                {skill.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.7" }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES SECTION */}
      <div style={{ padding: "60px 60px", backgroundColor: "#fff" }}>
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "30px",
            color: "#1a1a1a",
          }}
        >
          What I Believe In
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#f0a500",
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: "15px", color: "#333", fontWeight: "500" }}>
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE BANNER */}
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontStyle: "italic",
            color: "#f0a500",
            maxWidth: "700px",
            margin: "0 auto 16px",
            lineHeight: "1.6",
          }}
        >
          "True growth begins in the mind."
        </p>
        <p style={{ color: "#aaa", fontSize: "14px" }}>— Bishwajeet Singh</p>
      </div>

    </div>
  );
};

export default About;
