import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./pages/dashboard/dashboard";
import { AppLayout } from "./components/appLayout/AppLayout";
import { Login } from "./pages/login/Login";
import { MeusPalpites } from "./pages/meusPalpites/MeusPalpites";
import { Ranking } from "./pages/ranking/Ranking";
import { Resultados } from "./pages/resultados/Resultados";
import { ProtectRoute } from "./routes/ProtectRoute";
import { ToastProvider } from "./components/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meuspalpites" element={<MeusPalpites />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/resultados" element={<Resultados />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
