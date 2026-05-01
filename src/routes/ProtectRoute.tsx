import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../contexts/useAuth";


export function ProtectRoute() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="container">Carregando...</div>;

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
