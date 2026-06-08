const Sessions = () => {
  const sessionSlots = [
    {
      id: 1,
      day: "Monday",
      shortDay: "MON",
      time: "10:00 AM – 11:00 AM",
      topic: "Clarity & Direction",
      description: "Start your week with a clear mind. We work on setting intentions and removing mental clutter.",
      price: 999,
    },
    {
      id: 2,
      day: "Tuesday",
      shortDay: "TUE",
      time: "12:00 PM – 1:00 PM",
      topic: "Deep Thinking & Problem Solving",
      description: "Learn to slow down, think deeply, and approach life's problems with calm and logic.",
      price: 999,
    },
    {
      id: 3,
      day: "Wednesday",
      shortDay: "WED",
      time: "4:00 PM – 5:00 PM",
      topic: "Confidence & Self-Belief",
      description: "Work on your inner voice. Build confidence that doesn't depend on others' approval.",
      price: 999,
    },
    {
      id: 4,
      day: "Thursday",
      shortDay: "THU",
      time: "11:00 AM – 12:00 PM",
      topic: "Mindset Reset",
      description: "Break old thought patterns. Reframe how you see challenges, failure, and growth.",
      price: 999,
    },
    {
      id: 5,
      day: "Friday",
      shortDay: "FRI",
      time: "6:00 PM – 7:00 PM",
      topic: "Life Coaching & Goals",
      description: "Define what you actually want from life and build a real plan to get there.",
      price: 999,
    },
    {
      id: 6,
      day: "Saturday",
      shortDay: "SAT",
      time: "10:00 AM – 11:00 AM",
      topic: "Emotional Intelligence",
      description: "Understand your emotions, manage reactions, and build deeper relationships.",
      price: 999,
    },
    {
      id: 7,
      day: "Sunday",
      shortDay: "SUN",
      time: "5:00 PM – 6:00 PM",
      topic: "Reflection & Inner Peace",
      description: "End your week by reflecting on growth, gratitude, and preparing your mind for the week ahead.",
      price: 999,
    },
  ];

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>

      {/* HERO BANNER */}
      <div
        style={{
          position: "relative",
          height: "260px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format"
          alt="Sessions background"
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
        {/* Overlay */}
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
        {/* Text */}
        <div style={{ position: "relative", zIndex: 2, color: "white" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Book a 1-on-1 Session
          </h1>
          <p style={{ fontSize: "16px", color: "#ccc" }}>
            7 days a week · Personal growth · Life coaching · Deep thinking
          </p>
        </div>
      </div>

      {/* SESSION CARDS */}
      <div style={{ padding: "50px 40px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "22px",
          }}
        >
          {sessionSlots.map((slot) => (
            <div
              key={slot.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Day Badge */}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#1a1a1a",
                  color: "#f0a500",
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  width: "fit-content",
                }}
              >
                {slot.shortDay}
              </span>

              {/* Day Name */}
              <h3 style={{ fontSize: "18px", color: "#1a1a1a" }}>
                {slot.day}
              </h3>

              {/* Topic */}
              <p style={{ fontWeight: "600", color: "#333", fontSize: "14px" }}>
                {slot.topic}
              </p>

              {/* Description */}
              <p style={{ color: "#777", fontSize: "13px", lineHeight: "1.6" }}>
                {slot.description}
              </p>

              {/* Time */}
              <p style={{ color: "#555", fontSize: "13px" }}>
                🕐 {slot.time}
              </p>

              {/* Price */}
              <p style={{ fontWeight: "bold", fontSize: "18px", color: "#1a1a1a" }}>
                ₹{slot.price}
              </p>

              {/* Button */}
              <button
                style={{
                  marginTop: "auto",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  fontSize: "14px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;