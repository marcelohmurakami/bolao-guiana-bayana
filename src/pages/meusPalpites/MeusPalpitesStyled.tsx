import styled from "styled-components";
import stadiumBg from "../../assets/backgroundImg.png";

export const PageWrapper = styled.main`
  padding-bottom: 4rem;
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 28rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: url(${stadiumBg}) center/cover no-repeat;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 0 7.2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 24rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 22rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.76) 0%,
    rgba(15, 23, 42, 0.48) 45%,
    rgba(22, 163, 74, 0.32) 100%
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 0;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 4rem;
  padding: 0.8rem 1.4rem;
  margin-bottom: 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(3rem, 5vw, 5.2rem);
  margin-bottom: 1rem;
  max-width: 72rem;
`;

export const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.86);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 64rem;
  line-height: 1.6;
`;

export const FiltersSection = styled.section`
  margin-top: -2rem;
  position: relative;
  z-index: 2;
  margin-bottom: 2.4rem;
`;

export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.4rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  min-height: 4.4rem;
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.text};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.gradientPrimary : "rgba(255, 255, 255, 0.76)"};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? "transparent" : theme.colors.border};

  &:hover {
    transform: translateY(-1px);
  }
`;

export const MatchesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const MatchCard = styled.article`
  padding: 2.2rem;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow:
    0 20px 50px rgba(15, 23, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.8rem;
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

export const MatchHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const MatchStage = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 0.4rem;
`;

export const MatchDate = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const MatchStatus = styled.span<{ $closed?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.6rem;
  padding: 0.6rem 1.2rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, $closed }) =>
    $closed ? theme.colors.danger : theme.colors.primaryDark};
  background: ${({ theme, $closed }) =>
    $closed ? theme.colors.dangerLight : theme.colors.primaryLight};
`;

export const TeamsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.8rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: rgba(248, 250, 252, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TeamRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const TeamFlag = styled.img`
  width: 20%;
  height: auto;
`;

export const TeamName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ScoreInputs = styled.div`
  display: flex;
  align-items: center;
`;

export const ScoreInput = styled.input`
  width: 7rem;
  min-width: 7rem;
  min-height: 5.6rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  padding: 0;

  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textLight};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 6rem;
    min-width: 6rem;
    min-height: 5rem;
    font-size: 2rem;
  }
`;

export const Versus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  margin: 0 auto;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MatchFooter = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const PalpiteInfo = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const SaveButton = styled.button`
  width: 100%;
  min-height: 5.2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
  }
`;