import { supabase } from "./supabase";

export async function getUsers(userId: string) {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error("Não foi possível obter os dados do usuário");

  return profiles;
}

export async function getAllProfiles() {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")

  if (error) throw new Error("Não foi possível obter os dados dos usuários");

  return profiles;
}
