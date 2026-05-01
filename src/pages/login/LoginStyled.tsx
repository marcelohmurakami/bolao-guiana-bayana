import styled from "styled-components";
import stadiumBg from "../../assets/bg.webp";

export const LoginPageWrapper = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const LoginContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const BrandingSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 4rem;
  background: url(${stadiumBg}) center/cover no-repeat;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 34rem;
    padding: 3.2rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 28rem;
    padding: 2.4rem 1.6rem;
  }
`;

export const BrandingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.68) 0%,
      rgba(15, 23, 42, 0.4) 45%,
      rgba(22, 163, 74, 0.34) 100%
    );
`;

export const BrandingContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 56rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const BrandingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 4rem;
  padding: 0.8rem 1.4rem;
  margin-bottom: 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const BrandingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(3.2rem, 5vw, 5.6rem);
  margin-bottom: 1.2rem;
  max-width: 52rem;
`;

export const BrandingText = styled.p`
  color: rgba(255, 255, 255, 0.86);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 48rem;
  line-height: 1.6;
`;

export const BrandingFooter = styled.p`
  margin-top: 2.4rem;
  color: rgba(255, 255, 255, 0.74);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.08), transparent 30%),
    radial-gradient(circle at bottom right, rgba(22, 163, 74, 0.1), transparent 35%),
    ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.4rem 1.6rem 3.2rem;
  }
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  box-shadow:
    0 20px 50px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem;
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

export const FormHeader = styled.div`
  margin-bottom: 2.4rem;
`;

export const FormTitle = styled.h2`
  font-size: clamp(2.8rem, 4vw, 4rem);
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const Input = styled.input`
  min-height: 5.2rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.88);
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 0.4rem ${({ theme }) => theme.colors.secondaryLight};
  }
`;

export const ForgotPassword = styled.a`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginButton = styled.button`
  min-height: 5.4rem;
  margin-top: 0.8rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 2.4rem 0 1.6rem;
  background: ${({ theme }) => theme.colors.border};
`;

export const SmallText = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 1.2rem 1.4rem;

  border-radius: 1.2rem;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);

  color: #ef4444;
  font-size: 1.4rem;
  font-weight: 600;
`;