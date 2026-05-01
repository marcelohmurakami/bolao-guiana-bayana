import { useGetRankingOrdered } from "../../hooks/useGetMatches";
import { useProfile } from "../../hooks/useProfile";
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  RankingSection,
  RankingTable,
  RankingHeader,
  RankingRow,
  Position,
  PlayerInfo,
  Avatar,
  PlayerName,
  StatItem,
  StatValue,
  StatLabel,
  HighlightBadge,
} from "./RankingStyled";

export function Ranking() {
  const { data: profile, error: errorProfile } = useProfile();
  const { data: ranking, error: errorRanking } = useGetRankingOrdered();

  if (errorProfile || errorRanking) {
    console.error({
      profile: errorProfile,
      ranking: errorRanking,
    });
  }

  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />

        <HeroContent className="container">
          <HeroBadge>🏆 Ranking do Bolão</HeroBadge>

          <HeroTitle>Veja quem está dominando o bolão</HeroTitle>

          <HeroSubtitle>
            A classificação é atualizada automaticamente conforme os resultados
            das partidas.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <RankingSection className="container">
        <RankingTable>
          <RankingHeader>
            <span>Posição</span>
            <span>Participante</span>
            <span>Pontuação</span>
          </RankingHeader>

          {ranking?.map((player, index) => (
            <RankingRow
              key={player.idProfile}
              $highlight={player.idProfile === profile?.id}
            >
              <Position
                $rank={index + 1}
                $isLast={index === ranking.length - 1}
              >
                {index + 1}
              </Position>

              <PlayerInfo>
                <Avatar src={player.avatar}></Avatar>
                <PlayerName>
                  {player.nome}, {player.apelido}
                </PlayerName>
                {player.idProfile === profile?.id && (
                  <HighlightBadge>Você</HighlightBadge>
                )}
              </PlayerInfo>

              <StatItem>
                <StatValue>{player.total_points}</StatValue>
                <StatLabel>pontos</StatLabel>
              </StatItem>
            </RankingRow>
          ))}
        </RankingTable>
      </RankingSection>
    </PageWrapper>
  );
}
