export interface UserPayload {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: UserPayload;
}
