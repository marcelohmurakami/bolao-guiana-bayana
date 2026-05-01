import { useQuery } from "@tanstack/react-query";
import { getAllPredictions } from "../footballAPI/fetchsAPI";

export function useGetAllPredictions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-predictions"],
    queryFn: getAllPredictions,
  });

  if (error) throw new Error ("Não foi possível obter os palpites")

  return { data, isLoading, error }
}