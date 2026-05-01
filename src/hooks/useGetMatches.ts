import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMatches,
  getMatchesOrdered,
  getMatchesRound10,
  getMyPredictions,
  getPredictions,
  getRankingOrdered,
  savePrediction,
} from "../footballAPI/fetchsAPI";
import { showError, showSuccess } from "../utils/toaster";

export function useGetMatches() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["matches"],
    queryFn: getMatches,
  });

  return { data, isLoading, error };
}

export function useGetMatchesOrdered() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["matches"],
    queryFn: getMatchesOrdered,
  });

  return { data, isLoading, error };
}

export function useGetMatchesRound10() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pl-matches10"],
    queryFn: getMatchesRound10,
  });

  return { data, isLoading, error };
}

export function useGetPredictions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["predictions"],
    queryFn: getPredictions,
  });

  return { data, isLoading, error };
}

export function useGetMyPredictions(userId: string) {
  const {
    data: predictions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["predictions", userId],
    queryFn: () => getMyPredictions(userId),
    enabled: !!userId,
  });

  return { predictions, isLoading, error };
}

export function useSavePrediction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: savePrediction,
    onSuccess: () => {
      showSuccess("Palpite salvo com sucesso, que os deuses do futebol NÃO estejam com você!")
      queryClient.invalidateQueries({ queryKey: ["matches"] });
      queryClient.invalidateQueries({ queryKey: ["predictions"] });
    },
    onError: () => {
      showError("Não foi possível salvar seu palpite, tente novamente!")
    }
  });
}

export function useGetRankingOrdered() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ranking"],
    queryFn: getRankingOrdered,
  });

  return { data, isLoading, error };
}
