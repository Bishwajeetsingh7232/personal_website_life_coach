const Contact = () => {
  return (
    <div>
      {/* Hero Banner */}
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
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format"
          alt="Contact background"
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

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        />

        {/* Text */}
        <div style={{ position: "relative", zIndex: 2, color: "white" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Contact Bishwajeet
          </h1>
          <p style={{ fontSize: "17px", color: "#ddd" }}>
            Have a question or want to connect? I'm just a message away.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "60px 40px",
          flexWrap: "wrap",
        }}
      >
        {/* Phone */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "30px 40px",
            textAlign: "center",
            minWidth: "220px",
          }}
        >
          <p style={{ fontSize: "32px", marginBottom: "10px" }}>📞</p>
          <h3 style={{ marginBottom: "6px" }}>Phone</h3>
          <p style={{ color: "#555" }}>+91 8381803564</p>
        </div>

        {/* Email */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "30px 40px",
            textAlign: "center",
            minWidth: "220px",
          }}
        >
          <p style={{ fontSize: "32px", marginBottom: "10px" }}>✉️</p>
          <h3 style={{ marginBottom: "6px" }}>Email</h3>
          <p style={{ color: "#555" }}>bishwa@thedeepdev.com</p>
        </div>

        {/* Location */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "30px 40px",
            textAlign: "center",
            minWidth: "220px",
          }}
        >
          <p style={{ fontSize: "32px", marginBottom: "10px" }}>📍</p>
          <h3 style={{ marginBottom: "6px" }}>Location</h3>
          <p style={{ color: "#555" }}>India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 40px 80px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Send a Message
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
              outline: "none",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
              outline: "none",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
              outline: "none",
              resize: "vertical",
            }}
          />

          <button
            style={{
              backgroundColor: "#1a1a1a",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
