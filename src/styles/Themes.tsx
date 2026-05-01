export const theme = {
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },

  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2.4rem",
    "2xl": "3.2rem",
    "3xl": "4rem",
    "4xl": "4.8rem",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  radii: {
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.6rem",
    xl: "2rem",
    "2xl": "2.4rem",
    pill: "999px",
  },

  spacing: {
    xs: "0.4rem",
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.6rem",
    xl: "2.4rem",
    "2xl": "3.2rem",
    "3xl": "4rem",
    "4xl": "4.8rem",
    "5xl": "6.4rem",
  },

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 4px 10px rgba(0, 0, 0, 0.06)",
    md: "0 10px 30px rgba(0, 0, 0, 0.08)",
    lg: "0 20px 50px rgba(0, 0, 0, 0.12)",
    xl: "0 25px 70px rgba(0, 0, 0, 0.16)",
  },

  transitions: {
    fast: "0.2s ease",
    default: "0.3s ease",
    slow: "0.4s ease",
  },

  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },

  colors: {
    // Base
    white: "#FFFFFF",
    black: "#0B1220",

    // Backgrounds
    background: "#F5F7FB",
    backgroundSecondary: "#EEF2F8",
    surface: "#FFFFFF",
    surfaceSoft: "#F8FAFC",
    surfaceDark: "#111827",

    // Brand
    primary: "#16A34A",
    primaryDark: "#15803D",
    primaryLight: "#DCFCE7",

    secondary: "#2563EB",
    secondaryDark: "#1D4ED8",
    secondaryLight: "#DBEAFE",

    accent: "#F59E0B",
    accentDark: "#D97706",
    accentLight: "#FEF3C7",

    // Text
    text: "#0F172A",
    textSecondary: "#475569",
    textTertiary: "#64748B",
    textLight: "#94A3B8",
    textOnDark: "#F8FAFC",

    // Border
    border: "#E2E8F0",
    borderStrong: "#CBD5E1",

    // Feedback
    success: "#16A34A",
    successLight: "#DCFCE7",

    danger: "#DC2626",
    dangerLight: "#FEE2E2",

    warning: "#F59E0B",
    warningLight: "#FEF3C7",

    info: "#0EA5E9",
    infoLight: "#E0F2FE",

    // Ranking / destaque
    gold: "#EAB308",
    silver: "#94A3B8",
    bronze: "#C2410C",

    // Overlay
    overlay: "rgba(15, 23, 42, 0.55)",

    // Gradients
    gradientPrimary:
      "linear-gradient(135deg, #16A34A 0%, #22C55E 50%, #4ADE80 100%)",
    gradientHero:
      "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #16A34A 100%)",
    gradientCard:
      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",
  },
} as const;

export type ThemeType = typeof theme;