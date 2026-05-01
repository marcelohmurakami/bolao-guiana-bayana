import { useMemo, useState } from "react";
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ResultsGrid,
  ResultCard,
  ResultHeader,
  ResultStage,
  ResultDate,
  ResultStatus,
  ScoreRow,
  TeamColumn,
  TeamFlag,
  TeamName,
  ScoreBlock,
  ScoreNumber,
  ScoreMeta,
  PredictionsSection,
  PredictionsTitle,
  PredictionsList,
  PredictionRow,
  PredictionUser,
  PredictionScore,
  PredictionPoints,
  EmptyPredictions,
  EmptyResults,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
} from "./ResultadosStyled";
import { useGetMatches } from "../../hooks/useGetMatches";
import { useGetAllPredictions } from "../../hooks/useGetAllPredictions";
import { Spinner } from "../../components/spinner/Spinner";

type FilterType = "all" | "finished" | "live";

export function Resultados() {
  const { data: matches = [], isLoading, error } = useGetMatches();
  const {
    data: predictions = [],
    isLoading: isLoadingPredictions,
    error: errorPredictions,
  } = useGetAllPredictions();

  const [activeFilter] = useState<FilterType>("all");

  const predictionsMap = useMemo(() => {
    const grouped: Record<number, typeof predictions> = {};

    for (const prediction of predictions) {
      const matchId = prediction.idMatch;

      if (!grouped[matchId]) {
        grouped[matchId] = [];
      }

      grouped[matchId].push(prediction);
    }

    return grouped;
  }, [predictions]);

  const filteredMatches = useMemo(() => {
    switch (activeFilter) {
      case "finished":
        return matches.filter((match) => match.status === "FINISHED");

      case "live":
        return matches.filter(
          (match) =>
            match.status === "IN_PLAY" ||
            match.status === "PAUSED" ||
            match.status === "LIVE",
        );

      case "all":
      default:
        return matches.filter(
          (match) =>
            match.status === "FINISHED" ||
            match.status === "IN_PLAY" ||
            match.status === "PAUSED" ||
            match.status === "LIVE",
        );
    }
  }, [matches, activeFilter]);

  function formatMatchDate(date: string) {
    return new Date(date).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getStatusLabel(status: string) {
    switch (status) {
      case "FINISHED":
        return "Encerrado";
      case "IN_PLAY":
      case "LIVE":
        return "Ao vivo";
      case "PAUSED":
        return "Intervalo";
      case "TIMED":
        return "Agendado";
      default:
        return status;
    }
  }

  if (isLoading || isLoadingPredictions) return <Spinner />;
  if (error) return <h1>Erro ao carregar partidas.</h1>;
  if (errorPredictions) return <h1>Erro ao carregar palpites.</h1>;

  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />

        <HeroContent className="container">
          <HeroTitle>Acompanhe os palpites da galera</HeroTitle>
          <HeroSubtitle>
            Veja jogos ao vivo, partidas encerradas e os palpites de todos os
            participantes do bolão.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ResultsGrid className="container">
        {filteredMatches.map((match) => {
          const matchPredictions = predictionsMap[match.id] || [];
          const isLive =
            match.status === "IN_PLAY" ||
            match.status === "LIVE" ||
            match.status === "PAUSED";

          const hasScore =
            match.team1Score !== null && match.team2Score !== null;

          return (
            <ResultCard key={match.id}>
              <ResultHeader>
                <div>
                  <ResultStage>{match.stage || "Partida"}</ResultStage>
                  <ResultDate>{formatMatchDate(match.matchDate)}</ResultDate>
                </div>

                <ResultStatus $live={isLive}>
                  {getStatusLabel(match.status)}
                </ResultStatus>
              </ResultHeader>

              <ScoreRow>
                <TeamColumn>
                  <TeamFlag src={match.team1Flag} alt={match.team1} />
                  <TeamName>{match.team1}</TeamName>
                </TeamColumn>

                <ScoreBlock>
                  <ScoreNumber>
                    {hasScore ? (
                      <>
                        {match.team1Score} <span>x</span> {match.team2Score}
                      </>
                    ) : (
                      <>
                        - <span>x</span> -
                      </>
                    )}
                  </ScoreNumber>
                  <ScoreMeta>
                    {isLive ? "Ao vivo" : "Placar da partida"}
                  </ScoreMeta>
                </ScoreBlock>

                <TeamColumn>
                  <TeamFlag src={match.team2Flag} alt={match.team2} />
                  <TeamName>{match.team2}</TeamName>
                </TeamColumn>
              </ScoreRow>

              <PredictionsSection>
                <PredictionsTitle>
                  Palpites da galera ({matchPredictions.length})
                </PredictionsTitle>

                {matchPredictions.length > 0 ? (
                  <PredictionsList>
                    {matchPredictions.map((prediction) => (
                      <PredictionRow key={prediction.id}>
                        <PredictionUser>
                          {prediction.profiles?.[0]?.apelido ||
                            prediction.profiles?.[0]?.nome ||
                            "Participante"}
                        </PredictionUser>

                        <PredictionScore>
                          {prediction.team1Prediction} x{" "}
                          {prediction.team2Prediction}
                          {match.status === "FINISHED" && (
                            <PredictionPoints>
                              {prediction.points ?? 0} pts
                            </PredictionPoints>
                          )}
                        </PredictionScore>
                      </PredictionRow>
                    ))}
                  </PredictionsList>
                ) : (
                  <EmptyPredictions>Ninguém palpitou ainda.</EmptyPredictions>
                )}
              </PredictionsSection>
            </ResultCard>
          );
        })}
      </ResultsGrid>

      {filteredMatches.length === 0 && (
        <EmptyResults>
          <EmptyIcon>🕊️</EmptyIcon>

          <EmptyTitle>Calma, pombinho</EmptyTitle>

          <EmptyText>
            Você poderá ver os palpites dos amiguinhos de uma determinada
            partida assim que ela começar e a edição do palpite estiver fechada.
          </EmptyText>
        </EmptyResults>
      )}
    </PageWrapper>
  );
}
