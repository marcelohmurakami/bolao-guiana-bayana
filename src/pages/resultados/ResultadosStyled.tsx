import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background || "#0f1115"};
  color: ${({ theme }) => theme.colors.white || "#fff"};
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 5rem 0 3rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3.5rem 1rem 2rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 45%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent);
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: var;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.75rem;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.3rem);
  line-height: 1.05;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  max-width: 720px;
  margin: 0;
  color: rgba(0, 0, 0, 0.75);
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.92rem;
  }
`;

export const FiltersSection = styled.section`
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.5rem;
  }
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)"};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.04)"};
  color: #fff;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 1;
    min-width: calc(50% - 0.5rem);
    padding: 0.65rem 0.75rem;
    font-size: 0.85rem;
  }
`;

export const ResultsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
  gap: 1.25rem;
  padding-bottom: 3rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const ResultCard = styled.article`
  background: #151922;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
    border-radius: 16px;
  }
`;

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
`;

export const ResultStage = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8f9bb3;
  font-weight: 700;
`;

export const ResultDate = styled.div`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: #b8c1d1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.82rem;
  }
`;

export const ResultStatus = styled.span<{ $live?: boolean }>`
  flex-shrink: 0;
  background: ${({ $live }) =>
    $live ? "rgba(34,197,94,0.16)" : "rgba(255,255,255,0.08)"};
  color: ${({ $live }) => ($live ? "#59f08a" : "#dbe3f1")};
  border: 1px solid
    ${({ $live }) =>
      $live ? "rgba(34,197,94,0.35)" : "rgba(255,255,255,0.08)"};
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.38rem 0.65rem;
    font-size: 0.72rem;
  }
`;

export const ScoreRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.6rem;
  }
`;

export const TeamColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 0;
`;

export const TeamFlag = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 0.65rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 42px;
    height: 42px;
    margin-bottom: 0.45rem;
  }
`;

export const TeamName = styled.span`
  color: #f3f6fc;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.78rem;
  }
`;

export const ScoreBlock = styled.div`
  text-align: center;
  min-width: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 82px;
  }
`;

export const ScoreNumber = styled.div`
  font-size: 2.4rem; // 👈 maior
  font-weight: 800;
  color: #ffffff;
  line-height: 1;

  span {
    color: #7f8aa3;
    margin: 0 0.35rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.6rem;
  }
`;

export const ScoreMeta = styled.div`
  margin-top: 0.45rem;
  font-size: 0.82rem;
  color: #8f9bb3;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.7rem;
  }
`;

export const PredictionsSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`;

export const PredictionsTitle = styled.h3`
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
  color: #f4f7fd;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.88rem;
  }
`;

export const PredictionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const PredictionRow = styled.div`
  background: #1b2130;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

export const PredictionUser = styled.span`
  color: #f3f6fc;
  font-size: 1rem; // 👈 aumentei
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

export const PredictionScore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #dce4f3;
  font-weight: 700;
  font-size: 0.92rem;
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.82rem;
    gap: 0.4rem;
  }
`;

export const PredictionPoints = styled.span`
  background: rgba(34, 197, 94, 0.14);
  color: #68f29a;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.7rem;
    padding: 0.18rem 0.4rem;
  }
`;

export const EmptyPredictions = styled.p`
  margin: 0;
  color: #8f9bb3;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.82rem;
  }
`;

export const EmptyResults = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  max-width: 70%;
  margin: 2rem auto 4rem;
  padding: 2.5rem 2rem;
  text-align: center;

  background:
    radial-gradient(circle at top, rgba(34, 197, 94, 0.18), transparent 42%),
    linear-gradient(135deg, #151922, #10141d);

  border: 1px solid rgba(34, 197, 94, 0.18);
  border-radius: 24px;

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  animation: fadeUp 0.35s ease both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1rem auto 3rem;
    padding: 2rem 1.25rem;
    border-radius: 20px;
  }
`;

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;

  display: grid;
  place-items: center;

  font-size: 3.2rem;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.22);

  box-shadow: 0 0 28px rgba(34, 197, 94, 0.18);
`;

export const EmptyTitle = styled.h3`
  margin: 0 0 0.75rem;

  color: #ffffff;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const EmptyText = styled.p`
  max-width: 560px;
  margin: .5rem auto;

  color: #aab6cc;
  font-size: 2rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.92rem;
  }
`;