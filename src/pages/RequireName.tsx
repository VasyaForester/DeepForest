import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../state";

export function RequireName() {
  const { state } = useStore();
  if (!state.name) return <Navigate to="/" replace />;
  return <Outlet />;
}
