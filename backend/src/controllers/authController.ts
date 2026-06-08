import { Request, Response } from "express";
import * as authService from "../services/authService";

// ==========================================
// SIGNUP CONTROLLER
// ==========================================
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // 1. Controller level basic validation
    if (!name || !email || !password) {
      res.status(400).json({ error: "All fields (name, email, password) are required" });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({ error: "Password must be at least 6 characters long" });
      return;
    }

    // 2. Delegate business logic to service layer
    const result = await authService.registerUser({ name, email, password });

    // 3. Handle response
    res.status(201).json({
      message: "User registered successfully",
      ...result,
    });
  } catch (error: any) {
    console.error("Signup error in controller:", error.message);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
};

// ==========================================
// LOGIN CONTROLLER
// ==========================================
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // 1. Controller level basic validation
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    // 2. Delegate business logic to service layer
    const result = await authService.authenticateUser({ email, password });

    // 3. Handle response
    res.status(200).json({
      message: "Login successful",
      ...result,
    });
  } catch (error: any) {
    console.error("Login error in controller:", error.message);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
};

// ==========================================
// PROFILE CONTROLLER
// ==========================================
import { AuthenticatedRequest } from "../middleware/authMiddleware";

export const getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized access" });
      return;
    }

    const profile = await authService.getUserProfile(userId);

    res.status(200).json({
      message: "Profile retrieved successfully",
      user: profile,
    });
  } catch (error: any) {
    console.error("Profile error in controller:", error.message);
    res.status(404).json({ error: error.message || "User profile not found" });
  }
};

