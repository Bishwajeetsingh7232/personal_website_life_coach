import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client";
import { SignupData, LoginData, AuthResponse } from "../types/auth";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkeyforbishwathedeepdev";

/**
 * Register a new user
 * Handles business logic, duplicate checks, hashing, DB insertion, and JWT token signing.
 */
export const registerUser = async (data: SignupData): Promise<AuthResponse> => {
  const { name, email, password } = data;

  // 1. Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (existingUser) {
    throw new Error("Email is already registered");
  }

  // 2. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create user in database
  const user = await prisma.user.create({
    data: {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    },
  });

  // 4. Generate JWT Token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
  };
};

/**
 * Authenticate an existing user
 * Handles checking user credentials, matching passwords, and generating a JWT token.
 */
export const authenticateUser = async (data: LoginData): Promise<AuthResponse> => {
  const { email, password } = data;

  // 1. Find User by email
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // 2. Verify password match
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // 3. Generate JWT Token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
  };
};

/**
 * Get user profile details by ID
 */
export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

