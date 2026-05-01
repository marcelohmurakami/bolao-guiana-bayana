import styled, { css } from "styled-components";
import backgroundImg from "../../assets/bg.jpg";
import backgroundImgMob from "../../assets/bgmobile.jpg";

export const DashboardWrapper = styled.main`
  padding-bottom: 4rem;
  background:
    url(${backgroundImg}) center/cover no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: url(${backgroundImgMob}) no-repeat;
    background-color: black;
    background-size: 100%;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 44rem;
  border-radius: 0 0 3.2rem 3.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 2.4rem;

  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 38rem;
    border-radius: 0 0 2.4rem 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 32rem;
    padding: 3.2rem 1.6rem;
    margin: 0 .5rem;
  }
`;

export const HeroOverlay = styled.div`
  inset: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textOnDark};
  font-size: clamp(4rem, 5vw, 5.8rem);
  margin-bottom: 0.8rem;
  text-shadow: 0 4px 20px rgba(35, 4, 4, 0.5);
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(2.4rem, 3vw, 4rem);
  color: ${({ theme }) => theme.colors.textOnDark};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const TrophyBadge = styled.div`
  width: 22rem;
  height: 22rem;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle at 30% 30%,
    #fef3c7 0%,
    #f59e0b 35%,
    #b45309 100%
  );
  color: ${({ theme }) => theme.colors.white};
  box-shadow:
    0 20px 40px rgba(180, 83, 9, 0.35),
    inset 0 10px 20px rgba(255, 255, 255, 0.28);

  span {
    font-size: 6rem;
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }

  strong {
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 16rem;
    height: 16rem;

    span {
      font-size: 4.4rem;
    }

    strong {
      font-size: 2.2rem;
    }
  }
`;

export const CardsGrid = styled.section`
  margin-top: .5rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: .75fr 1fr 1.25fr;
  gap: 1.6rem;
  height: auto;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    margin-top: -2rem;
  }
`;

export const DashboardCard = styled.section<{ $center?: boolean }>`
  min-height: 38rem;
  padding: 2.2rem;
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow:
    0 20px 50px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  display: flex;
  flex-direction: column;

  ${({ $center }) =>
    $center &&
    css`
      justify-content: space-between;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: auto;
    padding: 1.8rem;
    border-radius: 2rem;
    margin: 0 1rem;
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 1.8rem;
`;

export const CardTitle = styled.h2`
  font-size: clamp(2.2rem, 2.5vw, 3rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.4rem;
`;

export const CardSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
`;

export const MatchItem = styled.div`
  padding: 1.4rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.xs};
`;

export const MatchTeams = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Flag = styled.img`
  width: 30%;
  height: auto;
`;

export const TeamName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MatchTime = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CardButton = styled.button<{ $ghost?: boolean }>`
  margin-top: 1.6rem;
  width: 100%;
  min-height: 5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, $ghost }) =>
    $ghost ? theme.colors.primaryDark : theme.colors.white};
  background: ${({ theme, $ghost }) =>
    $ghost ? "rgba(255,255,255,0.65)" : theme.colors.gradientPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PredictionSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin: auto 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const PredictionBox = styled.div<{
  $success?: boolean;
  $warning?: boolean;
}>`
  min-height: 18rem;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};

  background: ${({ $success }) =>
    $success
      ? "linear-gradient(180deg, #22c55e 0%, #15803d 100%)"
      : "linear-gradient(180deg, #f59e0b 0%, #b45309 100%)"};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 12rem;
  }  
`;

export const PredictionLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;
`;

export const PredictionValue = styled.strong`
  font-size: 5.2rem;
  line-height: 1;
  margin-top: 1rem;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
`;

export const ResultItem = styled.div`
  padding: 1.4rem 1.6rem;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const ResultTeams = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const ResultScore = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RankingItem = styled.div<{ $highlight?: boolean }>`
  padding: 1.3rem 1.4rem;
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: ${({ $highlight }) =>
    $highlight
      ? "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
      : "rgba(255,255,255,0.72)"};
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.white : theme.colors.text};
  border: 1px solid
    ${({ theme, $highlight }) =>
      $highlight ? "rgba(245, 158, 11, 0.4)" : theme.colors.border};
`;

export const RankingUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RankingPosition = styled.span`
  width: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const RankingAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const RankingName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const RankingPoints = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
