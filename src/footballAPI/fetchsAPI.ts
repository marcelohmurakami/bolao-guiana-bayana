import { supabase } from "../services/supabase";

export async function getMatches() {
  const { data: matches, error } = await supabase.from("matches").select("*").order("matchDate", { ascending: false });

  if (error) {
    throw new Error("Erro ao buscar partidas");
  }

  return matches;
}

export async function getMatchesOrdered() {
  const { data: matches, error } = await supabase.from("matches").select("*").order("matchDate", { ascending: true });

  if (error) {
    throw new Error("Erro ao buscar partidas");
  }

  return matches;
}

export async function getMatchesRound10() {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/WC/matches",
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Erro ao buscar partidas");
  }

  return data.matches;
}

export async function getPredictions() {
  const { data: predictions, error } = await supabase
    .from("predictions")
    .select("*");

  if (error) throw new Error("Erro ao buscar palpites");

  return predictions;
}

export async function getAllPredictions() {
  const { data, error } = await supabase.from("predictions").select(`
      id,
      idMatch,
      idProfile,
      team1Prediction,
      team2Prediction,
      points,
      profiles (
        id,
        nome,
        apelido
      )
    `);

  if (error) {
    console.error("GET ALL PREDICTIONS ERROR:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function getMyPredictions(id: string) {
  console.log("ID RECEBIDO:", id);

  if (!id) {
    throw new Error("ID do usuário não foi enviado.");
  }

  const { data: predictions, error } = await supabase
    .from("predictions")
    .select("*")
    .eq("idProfile", id);

  if (error) {
    console.error("GET MY PREDICTIONS ERROR:", error);
    throw new Error(error.message);
  }

  return predictions;
}

export async function getRankingOrdered() {
  const { data, error } = await supabase.from("ranking_usuarios").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

type SavePredictionParams = {
  idMatch: number;
  idProfile: string;
  team1Prediction: number;
  team2Prediction: number;
};

export async function savePrediction({
  idMatch,
  idProfile,
  team1Prediction,
  team2Prediction,
}: SavePredictionParams) {

  const { data, error } = await supabase
    .from("predictions")
    .upsert(
      {
        idMatch,
        idProfile,
        team1Prediction,
        team2Prediction,
      },
      {
        onConflict: "idMatch,idProfile",
      },
    )
    .select()
    .single();

  if (error) {
    console.error("SAVE PREDICTION ERROR:", error);
    throw error;
  }

  return data;
}
