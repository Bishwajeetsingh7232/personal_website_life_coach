import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());

app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
