import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabase";
import { getAllProfiles, getUsers } from "../services/usersApi";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError) throw new Error("Erro ao obter usuário logado");
      if (!authData.user) throw new Error("Usuário não está logado");

      return getUsers(authData.user.id);
    },
  });
}

export function useAllProfiles() {
    return useQuery({
        queryKey: ['profiles'],
        queryFn: getAllProfiles,
    })
}