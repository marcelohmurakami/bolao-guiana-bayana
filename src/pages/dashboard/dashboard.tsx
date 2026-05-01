import {
  DashboardWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  TrophyBadge,
  CardsGrid,
  DashboardCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  MatchList,
  MatchItem,
  MatchTeams,
  Flag,
  CardButton,
  PredictionSummary,
  PredictionBox,
  PredictionValue,
  PredictionLabel,
  RankingList,
  RankingItem,
  RankingPosition,
  RankingUser,
  RankingAvatar,
  RankingName,
  RankingPoints,
} from "./dashboardStyled";
import { useProfile } from "../../hooks/useProfile";
import {
  useGetMatchesOrdered,
  useGetMyPredictions,
  useGetRankingOrdered,
} from "../../hooks/useGetMatches";
import { Link } from "react-router";
import { Spinner } from "../../components/spinner/Spinner";

export function Dashboard() {
  const { data: matches, isLoading, error } = useGetMatchesOrdered();
  const { data: profile, error: errorProfile } = useProfile();
  const {
    data: ranking,
    isLoading: isLoadingRanking,
    error: errorRanking,
  } = useGetRankingOrdered();
  const {
    predictions: editPredictions = [],
    isLoading: isLoadingPred,
    error: errorPredictions,
  } = useGetMyPredictions(profile?.id);

  const hasError = error || errorProfile || errorRanking || errorPredictions;

  if (hasError) {
    console.error({
      matches: error,
      profile: errorProfile,
      ranking: errorRanking,
      predictions: errorPredictions,
    });
  }

  if (hasError) {
    return <p>Não foi possível carregar o dashboard.</p>;
  }

  const openMatches = matches?.filter((match) => match.status === "TIMED");

  const openMatchIds = openMatches?.map((match) => match.id) ?? [];

  const predictionsForOpenMatches =
    editPredictions?.filter((prediction) =>
      openMatchIds.includes(prediction.idMatch),
    ) ?? [];

  const doneCount = predictionsForOpenMatches.length;
  const missingCount = openMatchIds.length - doneCount;

  const position = ranking?.findIndex(
    (player) => player.idProfile === profile?.id,
  );

  const currentPosition =
    position !== undefined && position >= 0 ? position + 1 : null;

  if (isLoading || isLoadingRanking || isLoadingPred) return <Spinner />;

  return (
    <DashboardWrapper>
      <HeroSection className="container">
        <HeroOverlay />

        <HeroContent>
          <HeroTitle>{`Bem vindo, ${profile?.nome}`}</HeroTitle>
          <HeroSubtitle>
            Você está em <strong>{`${Number(currentPosition)}° lugar`}</strong>
          </HeroSubtitle>

          <TrophyBadge>
            <span>{`${Number(currentPosition)}°`}</span>
            <strong>LUGAR</strong>
          </TrophyBadge>
        </HeroContent>
      </HeroSection>

      <CardsGrid className="container">
        <DashboardCard>
          <CardHeader>
            <div>
              <CardTitle>Próximos Jogos</CardTitle>
              <CardSubtitle>Faça seus palpites!</CardSubtitle>
            </div>
          </CardHeader>

          <MatchList>
            {openMatches
              ?.filter((_, i) => i < 5)
              .map((match) => (
                <MatchItem key={match.id}>
                  <MatchTeams>
                    <Flag src={match.team1Flag}></Flag>
                    <span>VS</span>
                    <Flag src={match.team2Flag}></Flag>
                  </MatchTeams>
                </MatchItem>
              ))}
          </MatchList>

          <Link to={"/meuspalpites"}>
            <CardButton>Ver Todos</CardButton>
          </Link>
        </DashboardCard>

        <DashboardCard $center>
          <CardHeader>
            <div>
              <CardTitle>Seus Palpites em aberto</CardTitle>
            </div>
          </CardHeader>

          <PredictionSummary>
            <PredictionBox $success>
              <PredictionLabel>Palpites Feitos</PredictionLabel>
              <PredictionValue>{doneCount}</PredictionValue>
            </PredictionBox>

            <PredictionBox $warning>
              <PredictionLabel>Faltam Fazer</PredictionLabel>
              <PredictionValue>{missingCount}</PredictionValue>
            </PredictionBox>
          </PredictionSummary>

          <Link to={"/meuspalpites"}>
            <CardButton>Ver Todos</CardButton>
          </Link>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <div>
              <CardTitle>🏆 Ranking</CardTitle>
            </div>
          </CardHeader>

          <RankingList>
            {ranking?.map((player, index) => (
              <RankingItem key={player.idProfile} $highlight={player.highlight}>
                <RankingUser>
                  <RankingPosition>{index + 1}</RankingPosition>
                  <RankingAvatar src={player.avatar}></RankingAvatar>
                  <RankingName>
                    {player.nome}, {player.apelido}
                  </RankingName>
                </RankingUser>

                <RankingPoints>{player.total_points} pts</RankingPoints>
              </RankingItem>
            ))}
          </RankingList>
        </DashboardCard>
      </CardsGrid>
    </DashboardWrapper>
  );
}
