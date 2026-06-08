import { Router } from "express";
import { signup, login, getProfile } from "../controllers/authController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

// Route: POST /api/auth/signup
router.post("/signup", signup);

// Route: POST /api/auth/login
router.post("/login", login);

// Route: GET /api/auth/profile (Protected Route)
router.get("/profile", authenticateToken as any, getProfile);

export default router;
