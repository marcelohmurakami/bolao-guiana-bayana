import { useMemo, useState } from "react";
import {
  useGetMatchesOrdered,
  useGetMyPredictions,
  useSavePrediction,
} from "../../hooks/useGetMatches";
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  FiltersSection,
  FiltersRow,
  FilterButton,
  MatchesGrid,
  MatchCard,
  MatchHeader,
  MatchStatus,
  MatchDate,
  TeamsBlock,
  TeamRow,
  TeamInfo,
  TeamFlag,
  TeamName,
  ScoreInputs,
  ScoreInput,
  Versus,
  MatchFooter,
  PalpiteInfo,
  SaveButton,
} from "./MeusPalpitesStyled";
import { useProfile } from "../../hooks/useProfile";
import { Spinner } from "../../components/spinner/Spinner";
import { showError } from "../../utils/toaster";

export function MeusPalpites() {
  const { data: matches = [], isLoading, error } = useGetMatchesOrdered();
  const savePredictionMutation = useSavePrediction();

  const { data: user, error: errorProfile } = useProfile();
  const { predictions: editPredictions = [], error: errorPredictions } =
    useGetMyPredictions(user?.id);

  if (errorPredictions || errorProfile) {
    console.error({
      profile: errorProfile,
      predictions: errorPredictions,
    });
  }

  const [guesses, setGuesses] = useState<
    Record<number, { team1Prediction: string; team2Prediction: string }>
  >({});

  const [activeFilter, setActiveFilter] = useState<"all" | "open" | "closed">(
    "open",
  );

  const predictionsMap = useMemo(() => {
    return Object.fromEntries(editPredictions.map((p) => [p.idMatch, p]));
  }, [editPredictions]);

  const filteredMatches = useMemo(() => {
    if (activeFilter === "open") {
      return matches.filter((match) => match.status === "TIMED")
      ?.filter((match) => match.team1 !== null || match.team2 !== null);
    }

    if (activeFilter === "closed") {
      return matches.filter((match) => match.status !== "TIMED")
      ?.filter((match) => match.team1 !== null || match.team2 !== null);
    }

    return matches;
  }, [matches, activeFilter]);

  const handleGuessChange = (
    matchId: number,
    field: "team1Prediction" | "team2Prediction",
    value: string,
  ) => {
    if (value !== "" && Number(value) < 0) return;

    const existingPrediction = predictionsMap[matchId];

    setGuesses((prev) => ({
      ...prev,
      [matchId]: {
        team1Prediction:
          prev[matchId]?.team1Prediction ??
          existingPrediction?.team1Prediction?.toString() ??
          "",
        team2Prediction:
          prev[matchId]?.team2Prediction ??
          existingPrediction?.team2Prediction?.toString() ??
          "",
        [field]: value,
      },
    }));
  };

  const handleSavePrediction = (matchId: number) => {
    if (!user?.id) {
      alert("Você precisa estar logado para salvar palpites.");
      return;
    }

    const currentGuess = guesses[matchId];

    if (
      !currentGuess ||
      currentGuess.team1Prediction === "" ||
      currentGuess.team2Prediction === ""
    ) {
      showError("Preencha os dois palpites antes de salvar, seu burro.");
      return;
    }

    savePredictionMutation.mutate({
      idMatch: matchId,
      idProfile: user.id,
      team1Prediction: Number(currentGuess.team1Prediction),
      team2Prediction: Number(currentGuess.team2Prediction),
    });
  };

  if (isLoading) return <Spinner />;
  if (error) return <p>Erro ao carregar partidas.</p>;

  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />

        <HeroContent className="container">
          <HeroBadge>⚽ Seus palpites</HeroBadge>
          <HeroTitle>Defina seus placares antes do apito inicial</HeroTitle>
          <HeroSubtitle>
            Acompanhe as próximas partidas, revise seus chutes e salve seus
            palpites com antecedência.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FiltersSection className="container">
        <FiltersRow>
          <FilterButton
            $active={activeFilter === "open"}
            onClick={() => setActiveFilter("open")}
          >
            Abertos
          </FilterButton>

          <FilterButton
            $active={activeFilter === "closed"}
            onClick={() => setActiveFilter("closed")}
          >
            Fechados
          </FilterButton>
        </FiltersRow>
      </FiltersSection>

      <MatchesGrid className="container">
        {filteredMatches.map((match) => {
          const prediction = predictionsMap[match.id];

          const currentGuess = guesses[match.id] || {
            team1Prediction: prediction?.team1Prediction?.toString() ?? "",
            team2Prediction: prediction?.team2Prediction?.toString() ?? "",
          };

          const isClosed = match.status !== "TIMED";
          const isSavingThisMatch =
            savePredictionMutation.isPending &&
            savePredictionMutation.variables?.idMatch === match.id;

          let editStatus;
          if (match.status === "TIMED") editStatus = "ABERTO";
          else if (match.status === "FINISHED") editStatus = "FECHADO";

          return (
            <MatchCard key={match.id}>
              <MatchHeader>
                <div>
                  <MatchDate>
                    {new Date(match.matchDate).toLocaleDateString("pt-BR")}
                  </MatchDate>
                </div>

                <MatchStatus $closed={isClosed}>{editStatus}</MatchStatus>
              </MatchHeader>

              <TeamsBlock>
                <TeamRow>
                  <TeamInfo>
                    <TeamFlag src={match.team1Flag} />
                    <TeamName>{match.team1}</TeamName>
                  </TeamInfo>

                  <ScoreInputs>
                    <ScoreInput
                      type="number"
                      min="0"
                      value={currentGuess.team1Prediction}
                      onChange={(e) =>
                        handleGuessChange(
                          match.id,
                          "team1Prediction",
                          e.target.value,
                        )
                      }
                      disabled={isClosed || isSavingThisMatch}
                    />
                  </ScoreInputs>
                </TeamRow>

                <Versus>x</Versus>

                <TeamRow>
                  <TeamInfo>
                    <TeamFlag src={match.team2Flag} />
                    <TeamName>{match.team2}</TeamName>
                  </TeamInfo>

                  <ScoreInputs>
                    <ScoreInput
                      type="number"
                      min="0"
                      value={currentGuess.team2Prediction}
                      onChange={(e) =>
                        handleGuessChange(
                          match.id,
                          "team2Prediction",
                          e.target.value,
                        )
                      }
                      disabled={isClosed || isSavingThisMatch}
                    />
                  </ScoreInputs>
                </TeamRow>
              </TeamsBlock>

              <MatchFooter>
                <PalpiteInfo>
                  {isClosed
                    ? "Palpite travado porque a partida já começou."
                    : "Você ainda pode editar esse palpite antes do horário do jogo."}
                </PalpiteInfo>

                <SaveButton
                  disabled={isClosed || isSavingThisMatch}
                  onClick={() => handleSavePrediction(match.id)}
                >
                  {isClosed
                    ? "Palpite Fechado"
                    : isSavingThisMatch
                      ? "Salvando..."
                      : "Salvar Palpite"}
                </SaveButton>
              </MatchFooter>
            </MatchCard>
          );
        })}
      </MatchesGrid>
    </PageWrapper>
  );
}
