import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes.tsx";
import { GlobalStyles } from "./styles/Global.tsx";
import { BrowserRouter } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <App />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
