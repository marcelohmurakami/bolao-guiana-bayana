import styled from "styled-components";
import stadiumBg from "../../assets/bg.jpg";

export const PageWrapper = styled.main`
  padding-bottom: 4rem;
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 26rem;
  display: flex;
  align-items: center;
  background: url(${stadiumBg}) center/cover no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 20rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.75) 0%,
    rgba(15, 23, 42, 0.55) 50%,
    rgba(22, 163, 74, 0.35) 100%
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1rem;
  }
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  padding: 0.8rem 1.4rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 1.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.65rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.2rem, 7vw, 5rem);
  margin-bottom: 0.8rem;
  line-height: 1.05;
`;

export const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 60rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const RankingSection = styled.section`
  margin-top: -2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: -1rem;
    padding: 0 1rem;
  }
`;

export const RankingTable = styled.div`
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

export const RankingHeader = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) 120px 220px;
  gap: 1rem;
  padding: 1.4rem 1.6rem;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 70px minmax(0, 1fr) 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 48px minmax(0, 1fr) 72px;
    padding: 1rem;
    gap: 0.75rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: 1rem;
  }
`;

export const RankingRow = styled.div<{ $highlight?: boolean }>`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) 120px 220px;
  gap: 1rem;
  padding: 1.4rem 1.6rem;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ $highlight }) =>
    $highlight
      ? "linear-gradient(90deg, rgba(22,163,74,0.12), rgba(22,163,74,0.04))"
      : "transparent"};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 70px minmax(0, 1fr) 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 48px minmax(0, 1fr) 72px;
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const Position = styled.span<{ $rank: number; $isLast?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::after {
    font-size: 1.3rem;
    content: ${({ $rank, $isLast }) => {
      if ($rank === 1) return '"🥇"';
      if ($rank === 2) return '"🥈"';
      if ($rank === 3) return '"🥉"';
      if ($isLast) return '"🔦"';
      return '""';
    }};
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.secondaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 3rem;
    height: 3rem;
  }
`;

export const PlayerName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HighlightBadge = styled.span`
  margin-left: 0.8rem;
  padding: 0.2rem 0.6rem;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const PlayerStats = styled.div`
  display: flex;
  gap: 1.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;