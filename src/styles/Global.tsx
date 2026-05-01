import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    overflow-x: hidden;
  }

  body::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  img {
    height: auto;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: opacity ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast},
      background-color ${({ theme }) => theme.transitions.fast};
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input,
  textarea,
  select {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    padding: 1.2rem 1.4rem;
    outline: none;
    transition:
      border-color ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast},
      background-color ${({ theme }) => theme.transitions.fast};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 0.3rem ${({ theme }) => theme.colors.secondaryLight};
  }

  textarea {
    resize: vertical;
    min-height: 10rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4.8rem);
  }

  h2 {
    font-size: clamp(2.4rem, 4vw, 3.6rem);
  }

  h3 {
    font-size: clamp(2rem, 3vw, 2.8rem);
  }

  h4 {
    font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.normal};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    min-height: 100vh;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.pill};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textLight};
  }

  /* Classes utilitárias */
  .container {
    width: min(120rem, calc(100% - 3.2rem));
    margin: 0 auto;
  }

  .section {
    padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  }

  .card {
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.xl};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  .sr-only {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    padding: 0;
    margin: -0.1rem;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Tablet */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    html {
      font-size: 60%;
    }

    .container {
      width: min(100%, calc(100% - 2.4rem));
    }

    .section {
      padding: ${({ theme }) => theme.spacing["3xl"]} 0;
    }
  }

  /* Tablet menor */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 58%;
    }

    body {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    .container {
      width: min(100%, calc(100% - 2rem));
    }

    .section {
      padding: ${({ theme }) => theme.spacing["2xl"]} 0;
    }

    input,
    textarea,
    select {
      padding: 1.1rem 1.2rem;
    }
  }

  /* Celular */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    html {
      font-size: 56.25%;
    }

    body {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    .container {
      width: min(100%, calc(100% - 1.6rem));
    }

    .section {
      padding: ${({ theme }) => theme.spacing.xl} 0;
    }

    input,
    textarea,
    select,
    button {
      font-size: 1.6rem;
    }

    h1 {
      font-size: clamp(2.8rem, 8vw, 3.6rem);
    }

    h2 {
      font-size: clamp(2.2rem, 6vw, 3rem);
    }

    h3 {
      font-size: clamp(1.8rem, 5vw, 2.4rem);
    }

    p {
      font-size: 1.5rem;
    }
  }
`;