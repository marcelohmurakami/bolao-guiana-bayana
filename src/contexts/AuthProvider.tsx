import { AuthContext, type SignInData } from "./AuthContext";
import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../services/supabase";
import type { Session, User } from "@supabase/supabase-js";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadInitialSession() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Erro ao buscar sessão inicial:", error.message);
      }

      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    }

    loadInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // Evite chamar outras APIs async do Supabase aqui dentro
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw new Error(error.message);
    }

    setSession(null);
    setUser(null);
  }

  const value = useMemo(
    () => ({
      session,
      user,
      loading,
      signIn,
      signOut,
    }),
    [session, user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
