import {
  createContext
} from "react";
import type { Session, User } from "@supabase/supabase-js";

export type SignInData = {
  email: string;
  password: string;
};

export type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: ({ email, password }: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

